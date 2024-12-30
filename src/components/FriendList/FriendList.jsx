import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul>
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