import { useRef } from "react";

const SignForm = ({ handler }) => {
  const userNameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  function submitForm(event) {
    event.preventDefault();

    const formBody = {
      email: userNameInputRef.current.value,
      password: passwordInputRef.current.value
    };

    handler(formBody);
  }

  return (
    <form onSubmit={submitForm}>
      <div className="input-wrapper">
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          ref={userNameInputRef}
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