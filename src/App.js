import { Routes, Route, Navigate } from "react-router-dom";
import PostPage from "./pages/PostPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
