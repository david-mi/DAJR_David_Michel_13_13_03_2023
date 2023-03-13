
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignForm } from "../../Components";
import { authMiddleware } from "../../middlewares/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handler(data) {
    const { meta } = await dispatch(authMiddleware(data));
    if (meta.requestStatus === "fulfilled") {
      navigate("/profile");
    }
  }

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