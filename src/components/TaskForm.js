import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm({ saveTask, task }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

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
    navigate("/");
  }

  return (
    <form>
      <label>
        Hvilken opgave{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <br></br>

      <button type="submit" onSubmit={handleSubmit}>
        Opret ny opgave
      </button>
    </form>
  );
}
