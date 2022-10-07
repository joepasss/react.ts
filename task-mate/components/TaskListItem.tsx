import Link from "next/link";
import React, { FC } from "react";
import { Task } from "../generated/graphql-frontend";

interface Props {
  task: Task;
}

const TaskListItem: FC<Props> = ({ task }) => {
  return (
    <li className="task-list-item">
      <Link href={"/update/[id]"} as={`/update/${task.id}`}>
        <a>
          {task.title}({task.status})
        </a>
      </Link>

      <button className="task-list-item-delete">&times;</button>
    </li>
  );
};

export default TaskListItem;
