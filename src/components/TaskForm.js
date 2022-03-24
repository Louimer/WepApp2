import { useState } from "react";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { tasksRef } from "../firebase-config";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      title: title,
      uid: "",
      createdAt: serverTimestamp(),
    };
    addDoc(tasksRef, newTask);
    console.log(newTask);
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
