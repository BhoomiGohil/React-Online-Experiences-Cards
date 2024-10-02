function Card(props) {
  const prop = props.item;

  let badgeText;
  if (prop.openSpots === 0) badgeText = "SOLD OUT";
  else if (prop.location === "Online") badgeText = "ONLINE";
  return (
    <div className="card">
      <img className="card-image" src={`Images/${prop.coverImg}`}></img>
      <div className="card-text">
        <div className="card-stats">
          <img className="card-star" src="Icons/star-icon.png"></img>
          <p>{prop.stats.rating}</p>
          <p className="grey-text">({prop.stats.reviewCount})</p>
          <svg
            width="2"
            height="2"
            viewBox="0 0 2 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1" cy="1" r="1" fill="#918E9B" />
          </svg>
          <p className="grey-text">{prop.location}</p>
        </div>
        <p>{prop.title}</p>
        <p>
          <span className="semi-bold">From ${prop.price}</span> / person
        </p>
      </div>
      {badgeText && <div className="card-tag"> {badgeText}</div>}
    </div>
  );
}

export default Card;
