import React, { useRef } from "react";
import styles from "./authForm.module.css";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../hooks";
import { fetchStatus } from "../../enums";
import { AuthFormPropTypes } from "./propTypes";
import type { AuthPayload } from "../../Pages/Login/Login";

interface Props {
  /** handler to dispatch information to the store */
  submitHandler: (data: AuthPayload) => void
}

/**
 * Authentication form
 */

const AuthForm = ({ submitHandler }: Props) => {
  const emailInputRef = useRef<null | HTMLInputElement>(null);
  const passwordInputRef = useRef<null | HTMLInputElement>(null);
  const rememberMeRef = useRef<null | HTMLInputElement>(null);
  const { status: loginStatus, error: loginError } = useAppSelector(({ profile }) => profile.login);
  const { status: profileStatus, error: profileError } = useAppSelector(({ profile }) => profile.get);

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

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formBody = {
      email: emailInputRef.current!.value.trim(),
      password: passwordInputRef.current!.value.trim(),
      remember: rememberMeRef.current!.checked
    };

    if ((event.target as HTMLFormElement).reportValidity()) {
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