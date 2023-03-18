import { Link } from "react-router-dom";

const User = ({ firstName, signout }) => {
  return (
    <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
      <Link onClick={signout}
        className="main-nav-item"
        to="/sign-in"
      >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

export default User;