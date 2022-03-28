// import Checkbox from "../components/GroupCheckbox";
import { useNavigate } from "react-router-dom";
// import Checkbox from "../components/Checkbox";

export default function GroupPostCard({ grouptask }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.
  const navigate = useNavigate();

  function handleClick() {
    navigate(`grouptasks/${grouptask.id}`);
  }

  return (
    <>
      <article>
        {/* <Checkbox /> */}
        <div className="todo__text">
          <h3>{grouptask.title}</h3>
          <h3>{grouptask.showCal}</h3>
          <h3>{grouptask.person}</h3>
          <div className="update">
            <button onClick={handleClick}>update</button>
          </div>
        </div>
      </article>
    </>
  );
}