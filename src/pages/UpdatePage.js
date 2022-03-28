import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { tasksRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "@firebase/firestore";

export default function UpdatePage() {
  const navigate = useNavigate();
  const params = useParams();
  const [task, setTasks] = useState({});
  const taskId = params.id;
  console.log(taskId);

  useEffect(() => {
    async function getTask() {
      const docRef = doc(tasksRef, taskId);
      const docData = await getDoc(docRef);
      setTasks(docData.data);
    }
    getTask();
  }, [taskId]);

  function handleSubmit(taskToUpdate) {
    const docRef = doc(tasksRef, taskId);
    updateDoc(docRef, taskToUpdate);
    navigate("/");
  }

  function handleDelete() {
    const confirmDelete = window.confirm(`Delete, ${task.title}?`);
    if (confirmDelete) {
      const docRef = doc(tasksRef, task.id);
      deleteDoc(docRef);
    }
  }

  return (
    <section className="page">
      <h1>Update Page</h1>
      <TaskForm saveTask={handleSubmit} task={task} />
      <div className="checkbox_delete_container">
        <input type="checkbox" id="checkbox_delete" onClick={handleDelete} />
        <div id="bin-icon">
          <div id="lid"></div>
          <div id="box">
            <div id="box-inner">
              <div id="bin-lines"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
