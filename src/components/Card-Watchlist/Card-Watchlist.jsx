import "./Card-Watchlist.css";

const CardWatchlist = () => {
  return (
    <div className="card CardWatchlist">
      <img
        src="../../../public/img-home/Alaaeldin.jpg"
        alt=""
        className="card-image"
      />
      <div className="card-content">
        <h3>Alaaeldin</h3>
        <button>Remove From <br /> Watch List </button>
      </div>
    </div>
  );
};

export default CardWatchlist;
