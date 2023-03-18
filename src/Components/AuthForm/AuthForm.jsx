import { useRef } from "react";
import styles from "./authForm.module.css";
import Loader from "../../Components/Loader/Loader";
import { useSelector } from "react-redux";
import { fetchStatus } from "../../reducers/enums";

const AuthForm = ({ submitHandler }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const formRef = useRef(null);
  const { status, error } = useSelector(({ profile }) => profile.login);
  const isSendingRequest = status === fetchStatus.PENDING;

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value
    };

    if (formRef.current.reportValidity()) {
      submitHandler(formBody);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={submitForm}
      className={styles.form}
    >
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
        <input type="checkbox" id="remember-me" disabled={isSendingRequest} />
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

export default AuthForm;