import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { profileStatus } from "../../reducers/profile";

const Nav = () => {
  const status = useSelector((store) => store.profile.getStatus);
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {status === profileStatus.IDLE
        ? (
          <div>
            <Link className="main-nav-item" to="./user.html">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        )
        : (
          <div>
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )
      }
    </nav>
  );
};

export default Nav;

<nav class="main-nav">
  <a class="main-nav-logo" to="/">
    <img
      class="main-nav-logo-image"
      src="./img/argentBankLogo.png"
      alt="Argent Bank Logo"
    />
    <h1 class="sr-only">Argent Bank</h1>
  </a>
  <div>
    <a class="main-nav-item" to="./user.html">
      <i class="fa fa-user-circle"></i>
      Tony
    </a>
    <a class="main-nav-item" to="/">
      <i class="fa fa-sign-out"></i>
      Sign Out
    </a>
  </div>
</nav>;