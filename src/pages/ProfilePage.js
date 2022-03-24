import { usersRef } from "../firebase-config";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
// import { onSnapshot, doc, updateDoc, deleteDoc, setDoc, addDoc, getDoc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";


export default function ProfilePage({ showLoader }) {
    const [user, setUser] = useState({});
    const auth = getAuth();

    useEffect( () => {
        async function getUser() {
        // if (auth.currentUser) {
            // setUser(auth.currentUser);
            const docRef = doc(usersRef, auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.data()) {
                setUser(prevUser => ({ ...prevUser, ...docSnap.data() }));
            }
        }
        getUser();
    }, [auth.currentUser]);

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUser(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            };
        });
    }

    async function submitEvent(event) {
        event.preventDefault();
        showLoader(true);

        const userToUpdate = { name: user.name, image: user.image };
        console.log(userToUpdate);
        const docRef = doc(usersRef, user.uid);

        await setDoc(docRef, userToUpdate);
        showLoader(false);
    }

    function handleSignOut() {
        signOut(auth);
    }

    return (
        <section className="page">
            <h1>Profil</h1>
            <form onSubmit={submitEvent}>
            <label for="image">Profil billede</label>
            <img className="pf-preview" src={user?.image} alt="Skift foto" onError={event => (event.target.src = "./img/profile-picture.jpg")} />
                    <input type="url" value={user?.image} accept="image/*" onChange={handleChange} name="image" placeholder="Paste image url" />
                    <label for="image">Profil billede</label>
                
                <label for="name">Navn</label>
                    <input type="text" value={user?.name} onChange={handleChange} name="name" placeholder="Type name" />
                <label for="email">Email</label>
                    <input type="email" value={user?.email} onChange={handleChange} name="email" placeholder="Type email" disabled />
                <button>Gem</button>
            </form>
            <button className="btn-outline" onClick={handleSignOut}>Log ud</button>
        </section>
    );
}

