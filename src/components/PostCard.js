import { postsRef } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function PostCard({ task }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.
  const navigate = useNavigate();
  function handleDelete() {
    const confirmDelete = window.confirm();
  }

  return (
    <>
      <article>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
        <p>{task.list}</p>
        <p>{task.share}</p>
      </article>
    </>
  );
}
