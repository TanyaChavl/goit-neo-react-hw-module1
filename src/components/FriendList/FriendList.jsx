import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="containerFriendsList">
        {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id}>
          <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
        </li>
      ))}
    </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


export default FriendList;