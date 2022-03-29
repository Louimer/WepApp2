import TaskForm from "../components/TaskForm";
import { tasksRef } from "../firebase-config";
import { onSnapshot, query, orderBy } from "@firebase/firestore"; //realtime updates. Snakker sammen med en constant -
import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

export default function CreatePage() {
  const [tasks, setTasks] = useState([]); //gemmer alt data i et state

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

  return (
    <section className="page">
      <section className="card">
        <h1>Create Page</h1>
        <TaskForm />
      </section>
      <section className="grid-container">
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
