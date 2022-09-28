import React, { useState } from "react";
import { useCreateTaskMutation } from "../generated/graphql-frontend";

const CreatTaskForm: React.FC<{ onSuccess: () => {} }> = ({ onSuccess }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [createTask, { loading, error }] = useCreateTaskMutation({
    onCompleted: () => {
      onSuccess();
      setTitle("");
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loading) {
      try {
        await createTask({
          variables: {
            input: { title },
          },
        });
      } catch {
        // Log the error
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="alert-error">An error occurred</p>}
      <input
        type="text"
        name="title"
        placeholder="What would you like to get done?"
        className="text-input new-task-text-input"
        value={title}
        onChange={handleTitleChange}
      />
    </form>
  );
};

export default CreatTaskForm;
