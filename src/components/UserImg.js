import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import { getAuth } from "firebase/auth";
import placerholder from "../assets/profile-picture.jpg";

// ----- User Img Component made by Sofie
export default function User({ currentUser }) {
    const [user, setUser] = useState({
        image: placerholder
    });
    const auth = getAuth();

    useEffect(() => {
        async function getUser() {
            const docRef = doc(usersRef, auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.data()) {
                setUser(prevUser => ({ ...prevUser, ...docSnap.data() }));
            }
        }
        getUser();
    }, [auth.currentUser]);

    return (
        <div className="user-img">
            <img src={user.image} alt={user.uid} />
        </div>
    );
}