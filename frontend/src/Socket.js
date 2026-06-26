import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:8002";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  transports: ["websocket"],
  auth: (cb) => {
    cb({ token: localStorage.getItem("token") });
  },
});

export const connectSocket = (token) => {
  localStorage.setItem("token", token);
  socket.auth = { token };
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};
