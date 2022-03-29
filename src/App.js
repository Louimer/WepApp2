import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GroupCreatePage from "./pages/GroupCreatePage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav";
// import TopBar from "./components/TopBar";
import useLocalStorage from "use-local-storage";
import "./app.css";
import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import GroupUpdatePage from "./pages/GroupUpdatePage";
// import sunMoon from "./assets/sunMoon.svg";

function App() {
  const auth = getAuth();
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"));

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
    } else {
      setIsAuth(false);
      localStorage.removeItem("isAuth");
    }
  });

  return (
    <div className="App" data-theme={theme}>
      {/* <button className="DarkModeButton" onClick={switchTheme}>
        <img className="dark-mode-icon" src={sunMoon} alt="Dark Mode Icon" />
      </button> */}
      <main>
        {isAuth ? (
          <>
            {/* <TopBar /> */}
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/groupupdate/:id" element={<GroupUpdatePage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/update/:id" element={<UpdatePage />} />
              <Route path="/groupcreate" element={<GroupCreatePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="*" element={<Navigate to="signup" />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
