import Checkbox from "../components/GroupCheckbox";
export default function GroupPostCard({ grouptask }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.

  return (
    <>
      <article>
        <Checkbox />
        <div className="todo__text">
          <h3>{grouptask.title}</h3>
          <h3>{grouptask.showCal}</h3>
          <h3>{grouptask.person}</h3>
        </div>
      </article>
    </>
  );
}
