import { Link } from "react-router-dom";

/**
 * Guest version of navbar menu
 *
 * @returns {JSX.Element}
 */

const Guest = () => {
  return (
    <div>
      <Link className="main-nav-item" to="/login">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  );
};

export default Guest;