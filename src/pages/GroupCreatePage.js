//Louise
import GroupTaskForm from "../components/GroupTaskForm";
import { grouptaskRef } from "../firebase-config";
import { onSnapshot, query, orderBy } from "@firebase/firestore"; //realtime updates. Snakker sammen med en constant -
import { useState, useEffect } from "react";
import GroupPostCard from "../components/GroupPostCard";
import { getAuth } from "firebase/auth";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CreatePage() {
  const [grouptask, setGroupTask] = useState([]); //gemmer alt data i et state
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const q = query(grouptaskRef, orderBy("createdAt", "desc")); // order by: lastest post first
    const unsubscribe = onSnapshot(q, (data) => {
      //referer til quary i stedet for gruoptasksRef, fordi så kommer den med filterede resultater. unsub gør at man kan kigge på komponenterne, selvom man ikke er på samme side.kommer fra firebase, her returneres data fra.
      const grouptaskData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }; //henter alt data fra firebase (...doc.data) og sammen med id: doc.id - skriver id'et fra brugeren.
      });
      setGroupTask(grouptaskData);
    });
    return () => unsubscribe();
  }, []);

  async function handleSubmit(newGroupTask) {
    newGroupTask.createdAt = serverTimestamp(); // timestamp (now)
    newGroupTask.uid = auth.currentUser.uid; // user-id of auth user / signed in user
    await addDoc(grouptaskRef, newGroupTask); // add new doc - new group object
    navigate("/");
  }

  return (
    <section className="page">
      <section className="card">
        <h1> Opret en ny opgave til din gruppeliste</h1>
        <Link to="/">
          <AiOutlineArrowLeft size={30} /> <br></br>
        </Link>
        <br></br>

        <GroupTaskForm saveGroupTask={handleSubmit} />
      </section>
      <section className="createtask_container">
        {grouptask.map(
          (
            grouptask //til at kigge på array
          ) => (
            <GroupPostCard grouptask={grouptask} key={grouptask.id} /> //
          )
        )}
      </section>
    </section>
  );
}