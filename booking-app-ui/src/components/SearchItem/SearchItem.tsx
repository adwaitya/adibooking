import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340035431.jpg?k=67e6cacd304a10cb3461f5554a96bf23dfaf77a6e5ee6b34d9da4a30bb3fe2c4&o=&hp=1"
        alt="siImg"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Himalyan River Resort-A Riverside Resort</h1>
        <span className="siDistance">1.2 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures"></span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
       <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice"></span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotel/id`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem