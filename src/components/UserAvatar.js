import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import placerholder from "../assets/profile-picture.jpg";

export default function UserAvatar({ uid }) {
    const [user, setUser] = useState({
        image: placerholder,
        name: "Users Name",
        title: "Users Title"
    });

    useEffect(() => {
        async function getUser() {
            const docRef = doc(usersRef, uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.data()) {
                setUser(docSnap.data());
            }
        }
        getUser();
    }, [uid]);

    return (
        <div className="avatar">
            <img src={user.image} alt={user.id} />
            <span>
                <h3>{user.name}</h3>
                <p>{user.title}</p>
            </span>
        </div>
    );
}