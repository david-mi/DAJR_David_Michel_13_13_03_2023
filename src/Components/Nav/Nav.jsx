import { useSelector, useDispatch } from "react-redux";
import { profileStatus } from "../../reducers/profile";
import { Logo, User, Guest } from "./index";
import { disconnectMiddleware } from "../../middlewares/reset";

const Nav = ({ image, title }) => {
  const { getStatus: status, firstName } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  function handleSignout(event) {
    event.preventDefault();
    dispatch(disconnectMiddleware);
  }

  return (
    <nav className="main-nav">
      <Logo image={image} title={title} />
      {status === profileStatus.IDLE
        ? <User firstName={firstName} signout={handleSignout} />
        : <Guest />
      }
    </nav>
  );
};

export default Nav;