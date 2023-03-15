import './styles/main.css';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./Routes/Routes";
import { Footer, Nav } from "./Components";
import { getProfileMiddleware } from "./middlewares";

const navProps = {
  image: {
    src: "./argentBankLogo.png",
    alt: "Argent Bank Logo"
  },
  title: "Argent Bank"
};

const App = () => {
  const { authenticated } = useSelector((store) => store.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated === false) {
      dispatch(getProfileMiddleware());
    }
  }, [authenticated]);

  return (
    <BrowserRouter>
      <Nav {...navProps} />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
