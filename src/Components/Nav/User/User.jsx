import { Link } from "react-router-dom";

const User = ({ firstName }) => {
  return (
    <div>
      <Link className="main-nav-item" to="/">
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
      <Link className="main-nav-item" to="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </Link>
    </div>
  );
};

export default User;