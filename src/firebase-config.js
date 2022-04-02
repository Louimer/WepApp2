// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCi7HxDh4BCK3rjIlPtEbBC8mSb-O2iXMQ",
//   authDomain: "hejprojekt-4c0b4.firebaseapp.com",
//   projectId: "hejprojekt-4c0b4",
//   storageBucket: "hejprojekt-4c0b4.appspot.com",
//   messagingSenderId: "978984558874",
//   appId: "1:978984558874:web:36ca6c12e22a0ac08d0ca3",
//   measurementId: "G-NYB4XN4WHY",
// };
// const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp); //taler sammen med databasen på firestore

// export const usersRef = collection(db, "users");
// export const postsRef = collection(db, "posts"); //reference til firebase. Ref til biblioteket er collections. databasen defineres i parentesen (db, "data der skal hentes")
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARcZSyv-iy2oPH_4o49lKuo-GzKOf2W18",
  authDomain: "web-app-1-57964.firebaseapp.com",
  projectId: "web-app-1-57964",
  storageBucket: "web-app-1-57964.appspot.com",
  messagingSenderId: "767562034006",
  appId: "1:767562034006:web:507a17dcfceddb1ee604f7",
  measurementId: "G-STSB4DBNR6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export const tasksRef = collection(db, "task");
export const usersRef = collection(db, "usersRef");
export const grouptaskRef = collection(db, "grouptaskRef");