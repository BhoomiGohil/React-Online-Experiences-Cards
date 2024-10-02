import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";

function MainContent() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="container">
        <Hero />
        <Cards />
      </div>
    </div>
  );
}

export default MainContent;
