import { Link } from "react-router-dom";
import { UserPropTypes } from "./propTypes";

/**
 * User version of navbar menu
 * 
 * @param {Object} props
 * @param {string} props.firstName
 * @param {function()} props.disconnect handler to disconnect user from the application
 * @returns {JSX.Element}
 */

const User = ({ firstName, disconnect }) => {
  return (
    <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
      <Link onClick={disconnect}
        className="main-nav-item"
        to="/login"
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

User.propTypes = UserPropTypes;

export default User;