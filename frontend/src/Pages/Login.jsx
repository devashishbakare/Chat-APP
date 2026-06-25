import { useNavigate } from "react-router-dom";
import { connectSocket } from "../socket";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8002/api/user/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Login failed:", data);
        return;
      }
      console.log(data.data);
      localStorage.setItem("token", data.data.token);
      console.log("JWT saved:", data.data.token);

      connectSocket(data.token);
      navigate("/chat");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-[100vw] addBorder centerDiv">
        <form className="flex flex-col gap-[10px]" onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
            type="email"
            placeholder="userName"
            value={email}
            className="addBorder"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            className="addBorder"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="h-[50px] w-[100px] addBorder centerDiv"
            type="submit"
          >
            Login{" "}
          </button>
        </form>
      </div>
    </>
  );
};
