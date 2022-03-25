import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import GroupCreatePage from "./pages/GroupCreatePage";
import Nav from "./components/Nav";
import TopBar from "./components/TopBar";

function App() {
  return (
    <main>
      <TopBar />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/groupcreate" element={<GroupCreatePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
