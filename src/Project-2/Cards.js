import Card from "./Card";
import Data from "./Data";

function Cards() {
  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
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
      <div className="cards">{cards}</div>;
    </div>
  );
}

export default Cards;
