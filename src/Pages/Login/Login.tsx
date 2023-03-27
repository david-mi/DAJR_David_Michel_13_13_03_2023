
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AuthForm } from "../../Components";
import { authMiddleware } from "../../middlewares";

export interface AuthPayload {
  email: string,
  password: string,
  /** decide to store token on local or session storage */
  remember: boolean
}

/**
 * Login page
 */

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authenticated = useAppSelector(({ profile }) => profile.authenticated);

  /**
   * Handler to dispatch retrieved form data to {@link authMiddleware}
   */

  function loginFormHandler(data: AuthPayload) {
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