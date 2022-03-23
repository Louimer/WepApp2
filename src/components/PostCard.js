export default function PostCard({ task }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.
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
