import { useNavigate } from "react-router-dom";

export default function PostCard({ task }) {
  const navigate = useNavigate();

  function handleDelete() {
    const confirmDelete = window.confirm(`Delete, ${post.title}?`);
    if (confirmDelete) {
      const docRef = doc(postsRef, post.id);
      deleteDoc(docRef);
    }
  }

  function handleClick() {
    navigate(`tasks/${task.id}`);
  }

  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.body}</p>
      <p>{task.list}</p>
      <p>{task.share}</p>
      <button onClick={handleClick}>Update</button>
    </article>
  );
}
