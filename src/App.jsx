import './styles/main.css';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Routes from "./Routes/Routes";
import { Footer, Nav } from "./Components";
import { getProfileMiddleware } from "./middlewares";

const App = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ profile }) => profile.authenticated);
  const hasDisconnected = useSelector(({ profile }) => profile.hasDisconnected);

  useEffect(() => {
    if (authenticated === false && hasDisconnected === false) {
      dispatch(getProfileMiddleware);
    }
  }, [authenticated]);

  return (
    <BrowserRouter>
      <Nav
        image={{ src: "./argentBankLogo.png", alt: "Argent Bank Logo" }}
        title="Argent Bank"
      />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
