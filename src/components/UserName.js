import { useState, useEffect } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { usersRef } from "../firebase-config";


export default function UserName({ uid }) {
    const [user, setUser] = useState({
        name: "Name",
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
            <span className="user-name">{user.name}</span>
    );
}