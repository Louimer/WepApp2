import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GroupTaskForm({ saveGroupTask, grouptask }) {
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState(false);
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
      date: date,
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
        <select
          placeholder=""
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        >
          <option value="">Hvordan skal opgaven fordeles?</option>
          <option value="Sofie">Sofie</option>

          <option value="Christian"> Christian </option>

          <option value="Louise">Louise</option>
          <option value="Fælles for alle">Fælles opgave</option>
        </select>
      </label>
      <br></br>
      <label>
        Skal opgaven udføres en bestemt dag?
        <input
          placeholder=""
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <button type="submit">Gem</button>
    </form>
  );
}
