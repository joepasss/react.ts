import { Reference } from "@apollo/client";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import { Task, useDeleteTaskMutation } from "../generated/graphql-frontend";

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

  return (
    <li className="task-list-item">
      <Link href={"/update/[id]"} as={`/update/${task.id}`}>
        <a>
          {task.title}({task.status})
        </a>
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
