import { Login } from "./Pages/Login";
import { Chat } from "./Pages/Chat";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChatPage } from "./Pages/ChatPage";
function App() {
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={token ? <Navigate to="/chat" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={token ? <Chat /> : <Navigate to="/login" />}
        /> */}
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
