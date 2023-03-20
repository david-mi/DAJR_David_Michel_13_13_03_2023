import { useSelector, useDispatch } from "react-redux";
import { Logo, User, Guest } from "./index";
import { disconnectMiddleware } from "../../middlewares/disconnect";

/**
 * Main Navbar
 * Display {@link User} menu if authenticated or {@link Guest}
 * 
 * @param {Object} Props 
 * @returns {JSX.Element}
 */

const Nav = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ profile }) => profile.authenticated);
  const firstName = useSelector(({ profile }) => profile.firstName);

  function handleDisconnect() {
    dispatch(disconnectMiddleware);
  }

  return (
    <nav className="main-nav">
      <Logo {...props} />
      {authenticated
        ? <User firstName={firstName} disconnect={handleDisconnect} />
        : <Guest />
      }
    </nav>
  );
};

export default Nav;