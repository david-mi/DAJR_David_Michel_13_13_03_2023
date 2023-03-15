import styles from "./editProfile.module.css";
import { useRef } from "react";

const EditProfile = ({ firstName, lastName, closeForm, submitHandler }) => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const formRef = useRef(null);

  const namePattern = {
    required: true,
    type: "text",
    pattern: "^[a-zA-ZÀ-ö]{1}[a-z-À-ö ]*[a-zA-ZÀ-ö]{1}$",
    title: "Le prénom doit comporter au minimum 2 caractères, commencer et finir par une lettre"
  };

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value
    };

    if (formRef.current.reportValidity()) {
      submitHandler(formBody);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={submitForm}
      ref={formRef}
    >
      <input
        {...namePattern}
        placeholder="Prénom"
        ref={firstNameRef}
        className={styles.firstName}
        defaultValue={firstName}
      />
      <input
        {...namePattern}
        placeholder="Nom"
        ref={lastNameRef}
        className={styles.lastName}
        defaultValue={lastName}
      />
      <button className={styles.save}>Save</button>
      <button
        className={styles.cancel}
        onClick={closeForm}
        type="button"
      >
        Cancel
      </button>
      <small className={styles.error}></small>
    </form>
  );
};

export default EditProfile;
