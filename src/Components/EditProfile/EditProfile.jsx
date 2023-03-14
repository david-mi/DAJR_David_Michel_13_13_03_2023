import styles from "./editProfile.module.css";
import { useRef } from "react";

const EditProfile = ({ firstName, lastName, closeForm, submitHandler }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const formRef = useRef(null);

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value
    };

    submitHandler(formBody);
  }

  function closeEditForm() {
    formRef.current.reset();
    closeForm();
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitForm}
      ref={formRef}
    >
      <input
        type="text"
        placeholder={firstName}
        ref={firstNameRef}
        className={styles.firstName}
        minLength={2}
        required
      />
      <input
        type="text"
        placeholder={lastName}
        ref={lastNameRef}
        className={styles.lastName}
        minLength={2}
        required
      />
      <button className={styles.save}>Save</button>
      <button
        className={styles.cancel}
        onClick={closeEditForm}
        type="button"
      >
        Cancel
      </button>
      <small className={styles.error}></small>
    </form>
  );
};

export default EditProfile;
