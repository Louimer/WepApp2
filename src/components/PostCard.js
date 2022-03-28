// import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";
export default function PostCard({ task }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.

  const navigate = useNavigate();

  function handleClick() {
    navigate(`posts/${task.id}`);
  }

  return (
    <>
      <article>
        <div className="PostCard_cntr">
          <div className="checkbox_div">
            {/* <Checkbox /> */}
            <div className="todo-text">
              <h3>{task.title}</h3>
              <div className="update">
                <button onClick={handleClick}>update</button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
