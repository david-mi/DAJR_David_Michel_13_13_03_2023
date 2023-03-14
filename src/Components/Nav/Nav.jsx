import { useSelector } from "react-redux";
import { profileStatus } from "../../reducers/profile";
import { Logo, User, Guest } from "./index";

const Nav = ({ image, title }) => {
  const { getStatus: status, firstName } = useSelector((store) => store.profile);
  return (
    <nav className="main-nav">
      <Logo image={image} title={title} />
      {status === profileStatus.IDLE
        ? <User firstName={firstName} />
        : <Guest />
      }
    </nav>
  );
};

export default Nav;