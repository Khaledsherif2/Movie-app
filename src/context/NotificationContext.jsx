import { useEffect, createContext, useState, useContext } from "react";
import { SocketContext } from "./Socket";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const socket = useContext(SocketContext);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (socket) {
      socket.on("newMovie", (data) => {
        setNotifications((prevNotifications) => [...prevNotifications, data]);
      });

      socket.on("newMovieReleased", (data) => {
        setNotifications((prevNotifications) => [...prevNotifications, data]);
      });
      return () => {
        socket.off("newMovie");
        socket.off("newMovieReleased");
      };
    }
  }, [socket]);

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
