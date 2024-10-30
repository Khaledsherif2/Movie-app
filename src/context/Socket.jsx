// context/SocketContext.js
import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_SOCKET_LINK}`, {
      transports: ["websocket"],
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
