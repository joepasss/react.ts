import { Reference } from "@apollo/client";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import {
  Task,
  TaskStatus,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../generated/graphql-frontend";

interface Props {
  task: Task;
}

const TaskListItem: FC<Props> = ({ task }) => {
  const [deleteTask, { loading, error }] = useDeleteTaskMutation({
    variables: { id: task.id },
    errorPolicy: "all",

    update: (cache, result) => {
      const deletedTask = result.data?.deleteTask;

      if (deletedTask) {
        cache.modify({
          fields: {
            tasks(taskRefs: Reference[], { readField }) {
              return taskRefs.filter((taskRef) => {
                return readField("id", taskRef) !== deletedTask.id;
              });
            },
          },
        });
      }
    },
  });

  const handleDeleteClick = async () => {
    try {
      await deleteTask();
    } catch (error) {
      // Log the error
    }
  };

  useEffect(() => {
    if (error) {
      alert("An error occured, please try again");
    }
  }, [error]);

  const [updateTask, { loading: updateTaskLoading, error: updateTaskError }] =
    useUpdateTaskMutation({ errorPolicy: "all" });
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked
      ? TaskStatus.Completed
      : TaskStatus.Active;

    updateTask({ variables: { input: { id: task.id, status: newStatus } } });
  };

  useEffect(() => {
    if (updateTaskError) {
      alert("An error occureed, please try again");
    }
  }, [updateTaskError]);

  return (
    <li className="task-list-item">
      <label className="checkbox">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          checked={task.status === TaskStatus.Completed}
          disabled={updateTaskLoading}
        />
        <span className="checkbox-mark">&#10003;</span>
      </label>
      <Link href={"/update/[id]"} as={`/update/${task.id}`}>
        <a>{task.title}</a>
      </Link>

      <button
        className="task-list-item-delete"
        disabled={loading}
        onClick={handleDeleteClick}
      >
        &times;
      </button>
    </li>
  );
};

export default TaskListItem;
