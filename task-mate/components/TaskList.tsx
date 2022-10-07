import React from "react";
import { Task } from "../generated/graphql-frontend";
import TaskListItem from "./TaskListItem";

const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return <TaskListItem task={task} key={task.id} />;
      })}
    </ul>
  );
};

export default TaskList;
