import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";
export default function PostCard({ task }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/update`);
  }

  return (
    <>
      <article>
        <div className="PostCard_cntr">
          <div className="postcard-elem-checkbox">
            <div className="checkbox_div">
              <Checkbox />
            </div>
          </div>

          <div className="postcard-elem-todotext">
            <div className="todo-text">
              <h3>{task.title}</h3>
            </div>
          </div>

          <div className="postcard-elem-updatebtn">
            <div className="update">
              <button className="post-update-btn" onClick={handleClick}>
                update
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
