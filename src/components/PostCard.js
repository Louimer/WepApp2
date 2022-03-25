// import Checkbox from "../components/Checkbox";
export default function PostCard({ task }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.

  return (
    <>
      <article>
        <div className="PostCard_cntr">
          <div className="checkbox_div">
            {/* <Checkbox /> */}
            <div className="task_div"></div>
            <h3>{task.title}</h3>
          </div>
        </div>
      </article>
    </>
  );
}
