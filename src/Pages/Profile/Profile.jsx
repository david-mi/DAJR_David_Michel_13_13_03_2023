import { useSelector, useDispatch } from "react-redux";
import Accounts from "../../Components/Accounts/Accounts";
import { accountsData } from "./accountsData";
import { editProfileMiddleware } from "../../middlewares";

const Profile = () => {
  const { firstName, lastName } = useSelector((store) => store.profile);
  const dispatch = useDispatch();
  function handleEdit() {
    dispatch(editProfileMiddleware({ firstName: "Testeux", lastName: "Bégé" }));
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button onClick={handleEdit} className="edit-button">Edit Name</button>
      </div>
      <Accounts accounts={accountsData} />
    </main>
  );
};

export default Profile;