function Card(props) {
  const prop = props.item; // Destructure item from props

  // Determine the badge text based on the availability and location
  let badgeText;
  if (prop.openSpots === 0)
    badgeText = "SOLD OUT"; // Show SOLD OUT if no open spots
  else if (prop.location === "Online") badgeText = "ONLINE"; // Show ONLINE for online experiences

  return (
    <div className="card">
      {" "}
      {/* Main container for the card */}
      <img
        className="card-image"
        src={`Images/${prop.coverImg}`}
        alt={prop.title}
      />{" "}
      {/* Image of the card */}
      <div className="card-text">
        {" "}
        {/* Text content of the card */}
        <div className="card-stats">
          {" "}
          {/* Stats section */}
          <img
            className="card-star"
            src="Icons/star-icon.png"
            alt="Star icon"
          />{" "}
          {/* Star icon for rating */}
          <p>{prop.stats.rating}</p> {/* Display rating */}
          <p className="grey-text">({prop.stats.reviewCount})</p>{" "}
          {/* Review count */}
          <svg
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1" cy="1" r="1" fill="#918E9B" /> {/* Separator dot */}
          </svg>
          <p className="grey-text">{prop.location}</p> {/* Location text */}
        </div>
        <p>{prop.title}</p> {/* Title of the experience */}
        <p>
          <span className="semi-bold">From ${prop.price}</span> / person{" "}
          {/* Price per person */}
        </p>
      </div>
      {badgeText && <div className="card-tag"> {badgeText}</div>}{" "}
      {/* Conditional rendering of the badge */}
    </div>
  );
}

export default Card; // Exporting the Card component for use in other parts of the application
