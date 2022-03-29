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
                <p> Her skal stå hvor flot du har gjort rent i dag.<br/>
                    Du mangler kun hundrede opgaver, så er du i mål!
                </p>
            </div>
        </article>
    );
}
