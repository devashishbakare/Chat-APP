import { useEffect, useState } from "react";
import { socket, disconnectSocket } from "../socket";

export const Chat = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const onConnect = () => {
      console.log("socket connected:", socket.id);
    };

    const onDisconnect = () => {
      console.log("socket disconnected");
    };

    const onMessage = (data) => {
      console.log("received event:", data);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
    };
  }, []);

  const sendMessage = () => {
    console.log("sending:", message);
    socket.emit("message", { text: message });
    setMessage("");
  };

  return (
    <div className="h-auto w-[100vh] flex items-center addBorder gap-[10px]">
      <h2>Chat</h2>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="type message"
        className="addBorder"
      />

      <button
        onClick={sendMessage}
        className="h-[40px] w-[100px] addBorder rounded-[10px]"
      >
        Send
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          disconnectSocket();
          console.log("logged out");
        }}
        className="h-[40px] w-[100px] addBorder rounded-[10px]"
      >
        Logout
      </button>
    </div>
  );
};
