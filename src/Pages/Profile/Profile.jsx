import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Accounts from "../../Components/Accounts/Accounts";
import { accountsData } from "./accountsData";
import { editProfileMiddleware } from "../../middlewares";
import ProfileForm from "../../Components/ProfileForm/ProfileForm";
import { actions } from "../../reducers/profile/profile";

const Profile = () => {
  const dispatch = useDispatch();
  const firstName = useSelector(({ profile }) => profile.firstName);
  const lastName = useSelector(({ profile }) => profile.lastName);
  const [displayEditForm, setDisplayEditForm] = useState(false);

  /**
   * Handler to toggle {@link displayEditForm} state
   */

  function handleDisplayEditForm() {
    setDisplayEditForm((prev) => !prev);
  }

  /**
   * Handler to close {@link displayEditForm} state
   * - dispatch action to reset edit.error store state
   */

  function handleCloseEditForm() {
    setDisplayEditForm(false);
    dispatch(actions.editResetError());
  }

  /**
   * Handler to dispatch retrieved form data to {@link editProfileMiddleware}
   * - If data has been successfully sent, close form
   * 
   * @param {Object} data form body to use as middleware payload
   */

  async function editFormHandler(data) {
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
          ? <ProfileForm
            closeForm={handleCloseEditForm}
            submitHandler={editFormHandler}
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