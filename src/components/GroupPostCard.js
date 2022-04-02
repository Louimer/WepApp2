//Louise
import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";

export default function GroupPostCard({ grouptask }) {
  //prop er task, kunne kaldes alt mulig. skal matche med det data der hentes fra firebase.
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/groupupdate/${grouptask.id}`);
  } //kaldes når brugeren klikker på 'updatpe knappen, og navigere videre til update side.

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
            <div className="todo__text">
              <h3>{grouptask.title}</h3>
              <p>{grouptask.person}</p>
              <p>{grouptask.date}</p>
            </div>
          </div>

          <div className="postcard-elem-updatebtn">
            <div className="update">
              <button onClick={handleClick}>update</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}