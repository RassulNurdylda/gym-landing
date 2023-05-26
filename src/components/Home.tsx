import About from "./About";
import Footer from "./Footer";
import { Info } from "./Info";
import { Main } from "./Main";
import { Navbar } from "./Navbar";
import Price from "./Price";
import { Type } from "./Type";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Main />
      <About />
      <Info />
      <Type />
      <Price />
      <Footer />
    </main>
  );
};

export default Home;
