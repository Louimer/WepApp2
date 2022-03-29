import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import { getAuth } from "firebase/auth";
import placerholder from "../assets/profile-picture.jpg";

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

    // const [user, setUser] = useState({
    //     image: placerholder,
    // }); // initial values defined for properties: image, name and title

    // useEffect(() => {
    //     // based on the passed prop uid from PostCard
    //     // get user detail from firestore
    //     async function getUser() {
    //         const docRef = doc(usersRef, uid); // uid is the prop
    //         const docSnap = await getDoc(docRef);
    //         if (docSnap.data()) {
    //             // if user data then state the user state with the values
    //             setUser(docSnap.data());
    //         }
    //     }
    //     getUser();
    // }, [uid]); // useEffect is called every time uid changes

    return (
        <div className="user-img">
            <img src={user.image} alt={user.uid} />
        </div>
    );

}