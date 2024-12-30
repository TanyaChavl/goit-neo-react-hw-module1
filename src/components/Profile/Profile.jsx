import PropTypes from "prop-types";
import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="containerProfile profileCard">
      <div>
        <img src={image} alt={`${name} avatar`} className="profileAvatar"/>
        <p className="profileName">{name}</p>
        <p className="personalInfo">@{tag}</p>
        <p className="personalInfo">{location}</p>
      </div>

      <ul className="statisticsList">
        <li className="statisticItem">
          <span className="statisticName">Followers:</span>
          <span className="statisticValue">{stats.followers}</span>
        </li>
        <li className="statisticItem">
          <span className="statisticName">Views:</span>
          <span className="statisticValue">{stats.views}</span>
        </li>
        <li className="statisticItem">
          <span className="statisticName">Likes:</span>
          <span className="statisticValue">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;