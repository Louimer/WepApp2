import UserName from "./UserName";
import UserImg from "./UserImg";
import ProgressBar from "./ProgressBar.js";

const taskData = [{ bgcolor: "#50C878", completed: 60 }];

export default function WelcomeCard({ post }) {
  return (
    <article className="welcome-card">
      <div className="welcome-userimg">
        <UserImg />
      </div>
      <div className="welcome-msg">
        <h2>
          Hej, <UserName />!
        </h2>
        <p>
          {" "}
          Her skal stå hvor flot du har gjort rent i dag.
          <br />
          Du mangler kun hundrede opgaver, så er du i mål!
        </p>
        <div className="ProgressBar">
          {taskData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
