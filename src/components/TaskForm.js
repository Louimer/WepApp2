import { useEffect, useState } from "react";

export default function TaskForm({ saveTask, task }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  function handleSubmit(event) {
    event.preventDefault();
    const taskData = {
      title: title,
    };
    saveTask(taskData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Hvilken opgave{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <br></br>

      <button type="submit">Opret ny opgave</button>
    </form>
  );
}
