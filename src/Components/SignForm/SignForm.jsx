import { useRef } from "react";

const SignForm = ({ handler }) => {
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      email: usernameInputRef.current.value,
      password: passwordInputRef.current.value
    };

    handler(formBody);
  }

  return (
    <form onSubmit={submitForm}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={usernameInputRef}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
};

export default SignForm;