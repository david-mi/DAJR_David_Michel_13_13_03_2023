
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthForm } from "../../Components";
import { authMiddleware } from "../../middlewares";

/**
 * Login page
 * 
 * @returns {JSX.Element}
 */

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(({ profile }) => profile.authenticated);

  /**
   * Handler to dispatch retrieved form data to {@link authMiddleware}
   * 
   * @param {Object} data form body to use as middleware payload
   */

  function loginFormHandler(data) {
    dispatch(authMiddleware(data));
  }

  useEffect(() => {
    if (authenticated) {
      navigate("/profile");
    }
  }, [authenticated]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <AuthForm submitHandler={loginFormHandler} />
      </section>
    </main>
  );
};

export default Login;