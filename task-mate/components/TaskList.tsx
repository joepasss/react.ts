import Link from "next/link";
import React from "react";
import { Task } from "../generated/graphql-frontend";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li className="task-list-item" key={task.id}>
            <Link href={"/update/[id]"} as={`/update/${task.id}`}>
              <a>
                {task.title}({task.status})
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
