import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className="friendCard">
      <img src={avatar} alt={`${name}'s avatar`} width="48" className="friendImage"/>
      <p className="friendName">{name}</p>
      <p className={`friendStatus ${isOnline ? "online" : "offline"}`}>
       {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;