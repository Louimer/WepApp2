import { useState } from "react";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { grouptaskRef } from "../firebase-config";
import { Calendar } from "react-calendar";

export default function GroupTaskForm({ grouptask }) {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [showCal, setShowCal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const newGroupTask = {
      title: title,
      person: person,
      showCal: showCal,
      uid: "",
      createdAt: serverTimestamp(),
    };
    addDoc(grouptaskRef, newGroupTask);
    console.log(newGroupTask);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Hvilken opgave?"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <br></br>
      <label>
        Skal opgaven udføres en bestemt dag?
        <input
          placeholder=""
          value={showCal}
          type="checkbox"
          onChange={() => setShowCal((prevShowCal) => !prevShowCal)}
        />
        {showCal && <Calendar />}
      </label>

      <label>
        Hvordan skal opgaven fordeles
        <select
          placeholder=""
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option value="">Person 1</option>
          <option value="">Person 2</option>
          <option value="">Person 3</option>
          <option value="">Person 4</option>
        </select>
      </label>
      <button type="submit">Gem</button>
    </form>
  );
}
