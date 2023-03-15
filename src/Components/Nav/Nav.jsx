import { useSelector, useDispatch } from "react-redux";
import { Logo, User, Guest } from "./index";
import { disconnectMiddleware } from "../../middlewares/reset";

const Nav = ({ image, title }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ profile }) => profile.authenticated);
  const firstName = useSelector(({ profile }) => profile.firstName);

  function handleSignout() {
    dispatch(disconnectMiddleware);
  }

  return (
    <nav className="main-nav">
      <Logo image={image} title={title} />
      {authenticated
        ? <User firstName={firstName} signout={handleSignout} />
        : <Guest />
      }
    </nav>
  );
};

export default Nav;