import { useState, useEffect } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";

export default function GroupTaskForm({ saveGroupTask, grouptask }) {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [showCal, setShowCal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (grouptask) {
      setTitle(grouptask.title);
    }
  }, [grouptask]);

  function handleSubmit(event) {
    event.preventDefault();

    const grouptaskData = {
      title: title,
      person: person,
      showCal: showCal,
    };

    saveGroupTask(grouptaskData);
    navigate("/");
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
          value={grouptask.showCal}
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
