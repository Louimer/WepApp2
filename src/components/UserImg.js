// By Sofie
import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";
import placerholder from "../assets/profile-picture.gif";
import { getAuth } from "firebase/auth";

export default function User({ uid }) {
    const [user, setUser] = useState({
        image: placerholder
    });

    const auth = getAuth();
    useEffect(() => {
      async function getUser() {
        if (auth.currentUser) {
          setUser(auth.currentUser);
          const docRef = doc(usersRef, auth.currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.data()) {
            setUser((prevUser) => ({ ...prevUser, ...docSnap.data() }));
          }
        }
      }
      getUser();
    }, [auth.currentUser]);

    return (
        <div className="user-img">
            <img src={user.image} alt={user.id} />
        </div>
    );

}