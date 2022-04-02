//Louise
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GroupTaskForm({ saveGroupTask, grouptask }) {
     //saveGT og GT er props der sendes med videre til GroupUpdatePage
  const [title, setTitle] = useState("");
  const [person, setPerson] = useState("");
  const [date, setDate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (grouptask) {  // grouptask er prop der er passed til updatepage. useEffekt læser hver gang der ændres i grouptasks. 
      setTitle(grouptask.title);
    }
  }, [grouptask]);

  function handleSubmit(event) {
    event.preventDefault(); //håndtere hver gang der gemmes 

    const grouptaskData = { //definerer et nyt objekt, til at holde values fra inputfelt. 
      title: title,
      person: person,
      date: date,
    };
    saveGroupTask(grouptaskData); //gemmer Grouptask
    navigate("/"); //navigere tilbage til forside, efter submit
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
          <option value="Fælles opgave">Fælles opgave</option>
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