import { Hero, Features } from "../../Components";
import { features } from "./features";

/**
 * Home page
 */

const Home = () => {
  return (
    <main>
      <Hero />
      <Features features={features} />
    </main>
  );
};

export default Home;