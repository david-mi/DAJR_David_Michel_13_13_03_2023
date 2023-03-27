import { Link } from "react-router-dom";
import { UserPropTypes } from "./propTypes";

interface Props {
  firstName: string,
  /** handler to disconnect user from the application */
  disconnect: () => void
}

/**
 * User version of navbar menu
 */

const User = ({ firstName, disconnect }: Props) => {
  return (
    <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
      <Link onClick={disconnect}
        className="main-nav-item"
        to="/"
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

User.propTypes = UserPropTypes;

export default User;