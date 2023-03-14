import './styles/main.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes/Routes";
import { Footer, Nav } from "./Components";
import store from "./store";
const navProps = {
  image: {
    src: "./argentBankLogo.png",
    alt: "Argent Bank Logo"
  },
  title: "Argent Bank"
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav {...navProps} />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
