import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import Accounts from "../../Components/Accounts/Accounts";
import { accountsData } from "./accountsData";
import { editProfileMiddleware } from "../../middlewares";
import ProfileForm from "../../Components/ProfileForm/ProfileForm";
import { actions } from "../../reducers/profile/profile";

export interface ProfileEditPayload {
  firstName: string,
  lastName: string
}

/**
 * Profile page
 */

const Profile = () => {
  const dispatch = useAppDispatch();
  const firstName = useAppSelector(({ profile }) => profile.firstName);
  const lastName = useAppSelector(({ profile }) => profile.lastName);
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

  async function editFormHandler(data: ProfileEditPayload) {
    const succeed = await dispatch<true | void>(editProfileMiddleware(data));
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