import UserName from "./UserName";
import UserImg from "./UserImg";

export default function WelcomeCard({ post }) {


    return (
        <article className="welcome-card">
            <div className="welcome-userimg">
            <UserImg/>
            </div>
            <div className="welcome-msg">
                <h2>Hej, <UserName/>!</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Nam accumsan eros et leo iaculis suscipit.
                </p>
            </div>
        </article>
    );
}
