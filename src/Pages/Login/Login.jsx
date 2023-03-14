
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignForm } from "../../Components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { profileStatus } from "../../reducers/profile";
import { authMiddleware } from "../../middlewares/auth";
import { disconnectMiddleware } from "../../middlewares/reset";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(state => state.profile.getStatus);

  async function handler(data) {
    const { meta } = await dispatch(authMiddleware(data));
    if (meta.requestStatus === "fulfilled") {
      navigate("/profile");
    }
  }

  useEffect(() => {
    if (status === profileStatus.ERROR) {
      dispatch(disconnectMiddleware);
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