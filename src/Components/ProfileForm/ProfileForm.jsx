import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { fetchStatus } from "../../enums";
import styles from "./profileForm.module.css";
import { ProfileFormPropTypes } from "./propTypes";

/**
 * Profile edition form
 * 
 * @param {Object} props
 * @param {() =>} props.submitHandler handler to dispatch information to the store
 * @param {() =>} props.closeForm handler to close form
 * @param {string} props.firstName
 * @param {string} props.lastName
 * @returns {JSX.Element}
 */

const ProfileForm = (props) => {
  const { firstName, lastName, closeForm, submitHandler } = props;
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const { status, error } = useSelector(({ profile }) => profile.edit);
  const [validationError, setValidationError] = useState(null);
  const isSendingRequest = status === fetchStatus.PENDING;
  const hasError = error || validationError;

  const namePattern = {
    required: true,
    type: "text",
    pattern: "^[a-zA-ZÀ-ö]{1}[a-z-À-ö ]*[a-zA-ZÀ-ö]{1}$",
    title: "Le prénom doit comporter au minimum 2 caractères, commencer et finir par une lettre",
    disabled: isSendingRequest
  };

  /**
   * Handle form submit
   * 
   * - if reportValidity returns true on the form, calls {@link submitHandler}
   * passing {@link formBody} as parameter
   * - if data didn't change, set an error and prevent submitting
   * 
   * @param {import("react").FormEvent} event 
   */

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      firstName: firstNameRef.current.value.trim(),
      lastName: lastNameRef.current.value.trim()
    };

    if (isDataUnchanged(formBody.firstName, formBody.lastName)) {
      return setValidationError("Les informations sont identiques");
    }

    if (event.target.reportValidity()) {
      submitHandler(formBody);
    }
  }

  /**
   * Verify if firstName and lastName didn't change on form submit
   * 
   * @param {string} firstNameUpdate 
   * @param {string} lastNameUpdate 
   * @returns {boolean}
   */

  function isDataUnchanged(firstNameUpdate, lastNameUpdate) {
    return firstNameUpdate === firstName && lastNameUpdate === lastName;
  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <input
        {...namePattern}
        placeholder="Prénom"
        className={styles.firstName}
        defaultValue={firstName}
        name="firstName"
        ref={firstNameRef}
      />
      <input
        {...namePattern}
        placeholder="Nom"
        className={styles.lastName}
        defaultValue={lastName}
        name="lastName"
        ref={lastNameRef}
      />
      <button className={styles.save} disabled={isSendingRequest}>
        Save
        {isSendingRequest && <Loader className={styles.loader} />}
      </button>
      <button
        className={styles.cancel}
        onClick={closeForm}
        type="button"
        disabled={isSendingRequest}
      >
        Cancel
      </button>
      {hasError && <small className={styles.error}>{error || validationError}</small>}
    </form>
  );
};

ProfileForm.propTypes = ProfileFormPropTypes;

export default ProfileForm;
