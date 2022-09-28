import React from "react";
import { Task } from "../generated/graphql-frontend";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li className="task-list-item" key={task.id}>
            {task.title}({task.status})
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
