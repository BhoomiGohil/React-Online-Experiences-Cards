function Hero() {
  return (
    <div className="hero-section">
      {" "}
      {/* Main container for the hero section */}
      <img
        className="hero-img"
        src="Images/project2-hero-img.png"
        alt="Online Experiences" // Adding an alt attribute for accessibility
      />
      <div className="hero-heading">
        {/* Container for the heading and body text */}
        <h1>Online Experiences</h1> {/* Main heading */}
        <p className="hero-body">
          {/* Paragraph containing descriptive text */}
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero; // Exporting the Hero component for use in other parts of the application
