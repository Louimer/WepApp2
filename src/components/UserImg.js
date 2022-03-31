import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import placerholder from "../assets/useravatar1.png";

export default function User({ uid }) {
    const [user, setUser] = useState({
        image: placerholder
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
        <div className="user-img">
            <img src={user.image} alt={user.id} />
        </div>
    );

}