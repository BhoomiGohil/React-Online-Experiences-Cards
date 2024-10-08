import Card from "./Card"; // Importing the Card component
import Data from "./Data"; // Importing data from the Data file

function Cards() {
  // Mapping over the Data array to create an array of Card components
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id} // Unique key for each Card component
        item={item} // Passing the entire item as a prop to Card
        // The following props are commented out; they can be used if needed
        // coverImg={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });

  return (
    <div className="cards-block">
      {" "}
      {/* Main container for the cards */}
      <div className="cards">{cards}</div>{" "}
      {/* Rendering the array of Card components */}
    </div>
  );
}

export default Cards; // Exporting the Cards component for use in other parts of the application
