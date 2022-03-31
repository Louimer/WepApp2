import { usersRef } from "../firebase-config";
import { useState, useEffect } from "react";
import { getAuth, signOut, deleteUser, EmailAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import placerholder from "../assets/useravatar2.png";
import { HiMinusCircle } from "react-icons/hi";

export default function ProfilePage({ currentUser }) {
  const [user, setUser] = useState({
    image: placerholder,
  });
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 500000) {
      // image file size must be below 0,5MB
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage(""); // reset errorMessage state
    } else {
      // if not below 0.5MB display an error message using the errorMessage state
      setErrorMessage("The image file is too big!");
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function submitEvent(event) {
    event.preventDefault();

    const userToUpdate = { name: user.name, image: user.image };
    const docRef = doc(usersRef, auth.currentUser.uid);
    await setDoc(docRef, userToUpdate);

    console.log(userToUpdate);
  }

  // Sign out
  function handleSignOut() {
    signOut(auth);
  }

  // Delete user handler
  function handleUserDelete() {
    const auth = getAuth();
    const user = auth.currentUser;

    // If session expired, reauthenticate user credentials
    const credentials = EmailAuthProvider.credential(
      user.email,
      "yourpassword"
    );
    user.reauthenticateWithCredential(credentials);

    deleteUser(user)
      .then(() => {})
      .catch((error) => {
        // ...
      });
  }

  console.log(user.uid, auth.currentuser, user.name, user.image);

  return (
    <section className="page">
      <div className="profile-page">
        <form onSubmit={submitEvent}>
          <h3>Min bruger</h3>
          <div className="profile-avatar">
            <div className="user-img">
              <img
                src={image}
                alt={user.image}
                onError={(event) => (event.target.src = placerholder)}
              />
            </div>
            <p className="text-error">{errorMessage}</p>

            <label for="useravatar" className="profile-avatar-label">
              Profil billede
            </label>
            <input
              type="file"
              accept="image/*"
              value=""
              onChange={handleImageChange}
              name="image"
              placeholder="pic"
            />
          </div>
          {/* <label for="name">Navn</label> */}
          <input
            type="text"
            value={user?.name}
            onChange={handleChange}
            name="name"
            placeholder="Navn"
          />
          {/* <label for="email">Email</label> */}
          <input
            type="email"
            value={user?.email}
            onChange={handleChange}
            name="email"
            placeholder="bruger@mail.dk"
          />
          <button className="btn">Gem</button>

          <div className="profile-btn-cntr">
            <button className="btn" onClick={handleSignOut} data-id={user.id}>
              Log ud
            </button>
            <button
              className="btn-outline"
              onClick={handleUserDelete}
              data-id={user.id}
            >
              Slet bruger
            </button>
          </div>
        </form>
      </div>

      <div className="profile-page">
        <form onSubmit={submitEvent}>
          <h3>Min gruppe</h3>
          {/* <p>Gruppemedlemmer</p> */}
          <div className="group-members-box">
            <div className="user-img">
              <img src={user?.image} alt={user.id} />
            </div>
            <div className="group-members-details">
              <input
                type="text"
                className="group-member"
                value={user?.name}
                name="name"
                placeholder={`${user?.name}`}
              />
              <input
                type="email"
                className="group-member"
                value={user?.email}
                name="email"
                placeholder={`${user?.email}`}
              />
            </div>
            <button
              className="remove-btn"
              onClick={handleUserDelete}
              data-id={user.id}
            >
              <HiMinusCircle />
            </button>
          </div>

          <div className="group-members-box">
            <div className="user-img">
              <img src={user?.image} alt={user.id} />
            </div>
            <div className="group-members-details">
              <input
                type="text"
                className="group-member"
                value={user?.name}
                name="name"
                placeholder="Gruppemedlem"
              />
              <input
                type="email"
                className="group-member"
                value={user?.email}
                name="email"
                placeholder="medlem@email.dk"
              />
            </div>
            <button
              className="remove-btn"
              onClick={handleUserDelete}
              data-id={user.id}
            >
              {" "}
              <HiMinusCircle />{" "}
            </button>{" "}
            {/* OBS - pt slet user knap */}
          </div>

          <div className="group-members-box">
            <div className="user-img">
              <img src={user?.image} alt={user.id} />
            </div>
            <div className="group-members-details">
              <input
                type="text"
                className="group-member"
                value={user?.name}
                name="name"
                placeholder="Gruppemedlem"
              />
              <input
                type="email"
                className="group-member"
                value={user?.email}
                name="email"
                placeholder="medlem@email.dk"
              />
            </div>
            <button
              className="remove-btn"
              onClick={handleUserDelete}
              data-id={user.id}
            >
              {" "}
              <HiMinusCircle />{" "}
            </button>
          </div>
          <button className="invite-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM616 200h-48v-48C568 138.8 557.3 128 544 128s-24 10.75-24 24v48h-48C458.8 200 448 210.8 448 224s10.75 24 24 24h48v48C520 309.3 530.8 320 544 320s24-10.75 24-24v-48h48C629.3 248 640 237.3 640 224S629.3 200 616 200z" />
            </svg>
            Invitér
          </button>
        </form>
      </div>
    </section>
  );
}
