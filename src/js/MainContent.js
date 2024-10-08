import Navbar from "./Navbar";
import Hero from "./Hero";
import Cards from "./Cards";

// MainContent component that serves as the primary layout
function MainContent() {
  return (
    <div className="page-wrapper">
      {/* Wrapper for the entire page */}
      <Navbar /> {/* Render the Navbar component */}
      <div className="container">
        {/* Container for main content */}
        <Hero /> {/* Render the Hero component */}
        <Cards /> {/* Render the Cards component */}
      </div>
    </div>
  );
}

export default MainContent; // Export the MainContent component for use in other files
