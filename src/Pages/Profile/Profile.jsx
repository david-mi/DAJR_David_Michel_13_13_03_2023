import { useSelector } from "react-redux";
import Accounts from "../../Components/Accounts/Accounts";
import { accountsData } from "./accountsData";

const Profile = () => {
  const { firstName, lastName } = useSelector((store) => store.profile);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <Accounts accounts={accountsData} />
    </main>
  );
};

export default Profile;