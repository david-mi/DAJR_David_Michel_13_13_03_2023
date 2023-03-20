import React, { useRef } from "react";
import styles from "./authForm.module.css";
import Loader from "../../Components/Loader/Loader";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../enums";
import { AuthFormPropTypes } from "./propTypes";

/**
 * Authentication form
 * 
 * @param {Object} props
 * @param {function(Object)} props.submitHandler handler to dispatch information to the store
 * @returns {JSX.Element}
 */

const AuthForm = ({ submitHandler }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const rememberMeRef = useRef(null);
  const { status: loginStatus, error: loginError } = useSelector(({ profile }) => profile.login);
  const { status: profileStatus, error: profileError } = useSelector(({ profile }) => profile.get);

  const isSendingRequest = (
    loginStatus === fetchStatus.PENDING ||
    profileStatus === fetchStatus.PENDING
  );
  const error = loginError || profileError;

  /**
   * Handle form submit
   * 
   * if reportValidity returns true on the form, calls {@link submitHandler}
   * passing {@link formBody} as parameter
   * 
   * @param {React.FormEvent} event 
   */

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      email: emailInputRef.current.value.trim(),
      password: passwordInputRef.current.value.trim(),
      remember: rememberMeRef.current.checked
    };

    if (event.target.reportValidity()) {
      submitHandler(formBody);
    }
  }

  return (
    <form onSubmit={submitForm} className={styles.form} >
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={emailInputRef}
          required
          disabled={isSendingRequest}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          pattern="(?=.*[a-z])(?=.*\d)[\w]{5,}"
          title="Le mot de passe doit contenir au minimum 6 lettres dont une minuscule et un chiffre"
          required
          disabled={isSendingRequest}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          disabled={isSendingRequest}
          ref={rememberMeRef}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button" disabled={isSendingRequest}>
        Sign In
        {isSendingRequest && <Loader className={styles.loader} />}
      </button>
      {error && <small className={styles.error}>{error}</small>}
    </form>
  );
};

AuthForm.propTypes = AuthFormPropTypes;

export default AuthForm;