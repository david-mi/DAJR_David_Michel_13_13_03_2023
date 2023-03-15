import { useSelector, useDispatch } from "react-redux";
import { fetchStatus } from "../../reducers/profile";
import { Logo, User, Guest } from "./index";
import { disconnectMiddleware } from "../../middlewares/reset";

const Nav = ({ image, title }) => {
  const { authenticated, firstName } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  function handleSignout(event) {
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