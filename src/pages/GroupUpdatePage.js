import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GroupTaskForm from "../components/TaskForm";
import { groupTaskRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, deleteDoc } from "@firebase/firestore";

export default function GroupUpdatePage() {
  const navigate = useNavigate();
  const params = useParams();
  const [grouptask, setGroupTask] = useState({});
  const grouptaskId = params.id;
  console.log(grouptaskId);

  useEffect(() => {
    async function getGroupTask() {
      const docRef = doc(groupTaskRef, grouptaskId);
      const docData = await getDoc(docRef);
      setGroupTask(docData.data);
    }
    getGroupTask();
  }, [grouptaskId]);

  function handleSubmit(grouptaskToUpdate) {
    const docRef = doc(groupTaskRef, grouptaskId);
    updateDoc(docRef, grouptaskToUpdate);
    navigate("/");
  }
  function handleDelete() {
    const confirmDelete = window.confirm(`Delete, ${grouptask.title}?`);
    if (confirmDelete) {
      const docRef = doc(groupTaskRef, grouptask.id);
      deleteDoc(docRef);
    }
  }

  return (
    <section className="page">
      <h1>Group Update Page</h1>
      <GroupTaskForm savegroupTask={handleSubmit} grouptask={grouptask} />
      <button onClick={handleDelete}>Delete</button>
    </section>
  );
}
