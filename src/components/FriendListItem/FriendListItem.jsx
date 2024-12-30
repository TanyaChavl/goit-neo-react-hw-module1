import PropTypes from "prop-types";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;