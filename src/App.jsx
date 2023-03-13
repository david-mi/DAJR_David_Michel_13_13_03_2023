import './styles/main.css';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Footer, Nav } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
