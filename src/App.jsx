import './styles/main.css';
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Routes from "./Routes/Routes";
import { Footer, Nav } from "./Components";
import { getProfileMiddleware } from "./middlewares";

/**
 * App container
 * - On each first mount, dispatch {@link getProfileMiddleware} request,
 * to retrieve profile infos
 * 
 * @returns {JSX.Element}
 */

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileMiddleware);
  }, []);

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
