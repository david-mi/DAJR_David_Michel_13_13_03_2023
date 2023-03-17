import { useRef } from "react";
import styles from "./authForm.module.css";

const AuthForm = ({ submitHandler, error }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const formRef = useRef(null);

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
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
      {error && <small className={styles.error}>{error}</small>}
    </form>
  );
};

export default AuthForm;