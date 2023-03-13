
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignForm } from "../../Components";
import { authMiddleware } from "../../middlewares/auth";
import { userStatus } from "../../reducers/auth";

const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector(((store) => store.auth.status));
  const navigate = useNavigate();

  function handler(data) {
    dispatch(authMiddleware(data));
  }

  useEffect(() => {
    if (status === userStatus.CONNECTED) {
      navigate("/profile");
    }
  }, [status]);

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