import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accounts from "../../Components/Accounts/Accounts";
import { accountsData } from "./accountsData";
import { editProfileMiddleware } from "../../middlewares";
import EditProfile from "../../Components/EditProfile/EditProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const firstName = useSelector(({ profile }) => profile.firstName);
  const lastName = useSelector(({ profile }) => profile.lastName);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  function handleDisplayEditForm() {
    setDisplayEditForm((prev) => !prev);
  }

  async function formEditHandler(data) {
    const succeed = await dispatch(editProfileMiddleware(data));
    if (succeed) {
      setDisplayEditForm(false);
    }
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        {displayEditForm
          ? <EditProfile
            closeForm={handleDisplayEditForm}
            submitHandler={formEditHandler}
            firstName={firstName}
            lastName={lastName}
          />
          : (
            <button
              onClick={handleDisplayEditForm}
              className="edit-button"
            >
              Edit Name
            </button>
          )
        }
      </div>
      <Accounts accounts={accountsData} />
    </main>
  );
};

export default Profile;