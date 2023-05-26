import About from "./About";
import { Info } from "./Info";
import { Main } from "./Main";
import { Navbar } from "./Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Info />
    </main>
  );
};

export default Home;
