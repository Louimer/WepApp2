import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GroupCreatePage from "./pages/GroupCreatePage";
import ProfilePage from "./pages/ProfilePage";
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";
import useLocalStorage from "use-local-storage";
import "./app.css";
import GroupUpdatePage from "./pages/GroupUpdatePage";
import { WiSolarEclipse } from "react-icons/wi";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <button className="DarkModeButton" onClick={switchTheme}>
        <h3 className="dark-mode-icon">
          <WiSolarEclipse />
        </h3>
      </button>
      <main>
        <TopBar />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/groupcreate" element={<GroupCreatePage />} />
          <Route path="/groupupdate" element={<GroupUpdatePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
