import { Logo, User, Guest } from "./index";
import { disconnectMiddleware } from "../../middlewares/disconnect";
import { useAppDispatch, useAppSelector } from "../../hooks";

export interface Props {
  image: {
    src: string
    alt: string
  }
  title: string
}

/**
 * Main Navbar
 * Display {@link User} menu if authenticated or {@link Guest}
 * 
 */

const Nav = (props: Props) => {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector(({ profile }) => profile.authenticated);
  const firstName = useAppSelector(({ profile }) => profile.firstName);

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