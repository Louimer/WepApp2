//Louise
import TaskForm from "../components/TaskForm";
import { tasksRef } from "../firebase-config";
import { onSnapshot, query, orderBy } from "@firebase/firestore"; //realtime updates. Snakker sammen med en constant -
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import { getAuth } from "firebase/auth";
import { addDoc, serverTimestamp } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function CreatePage() {
  const [tasks, setTasks] = useState([]); //gemmer alt data i et state
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const q = query(tasksRef, orderBy("createdAt", "desc")); // order by: lastest post first
    const unsubscribe = onSnapshot(q, (data) => {
      //referer til quary i stedet for postsRef, fordi så kommer den med filterede resultater. unsub gør at man kan kigge på komponenterne, selvom man ikke er på samme side.
      const tasksData = data.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }; //henter alt data fra firebase (...doc.data) og sammen med id: doc.id - skriver id'et fra brugeren.
      });
      setTasks(tasksData);
    });
    return () => unsubscribe();
  }, []);

  async function handleSubmit(newTask) {
    newTask.createdAt = serverTimestamp(); // timestamp (now)
    newTask.uid = auth.currentUser.uid; // user-id of auth user / signed in user
    await addDoc(tasksRef, newTask); // poster ny task på homepage
    navigate("/");
  }

  return (
    <section className="page">
      <section className="card">
        <h1>Opret en ny opgave</h1>

        <Link to="/">
          <AiOutlineArrowLeft size={30} /> <br></br>
        </Link>
        <br></br>

        <TaskForm saveTask={handleSubmit} />
      </section>
      <section className="createtask_container">
        {tasks.map(
          (
            task //til at kigge på array
          ) => (
            <PostCard task={task} key={task.id} /> //
          )
        )}
      </section>
    </section>
  );
}