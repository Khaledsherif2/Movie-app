const NotificationCard = ({ notification }) => {
  return (
    <div className="notification-item">
      <img
        src={
          notification.user
            ? notification.user.avatar
            : notification.movie.poster.src
        }
        alt="Profile"
        className="avatar"
      />
      <div className="notification-text">
        <p>{notification.user ? notification.user.name : ""}</p>
        <p>{notification.movie ? notification.movie.title : ""}</p>
        <span className="time">{notification.message}</span>
      </div>
    </div>
  );
};

export default NotificationCard;
