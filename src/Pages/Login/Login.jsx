
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignForm } from "../../Components";
import { authMiddleware } from "../../middlewares";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authenticated = useSelector(({ profile }) => profile.authenticated);

  async function handler(data) {
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
        <SignForm handler={handler} />
      </section>
    </main>
  );
};

export default Login;