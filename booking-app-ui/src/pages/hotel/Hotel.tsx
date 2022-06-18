import "./hotel.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const photos: Array<{ src: string | undefined }> = [
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340035431.jpg?k=67e6cacd304a10cb3461f5554a96bf23dfaf77a6e5ee6b34d9da4a30bb3fe2c4&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/356962625.jpg?k=a8cbf797bfa4ccaec1cb3d4b82c30ac2e6bc2474b37ca3d4c1de8c597398c475&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340035448.jpg?k=cc5ea573c388593bdef3ffb32658282d27cd4d4bf31aa70b89bd696da0686f40&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/356964166.jpg?k=4573e9f2089c7763ba79c061f13b45b42bde948ab65c5f58a65c7a92bae2f15e&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340035446.jpg?k=4fb3691eb18ce5d8674ee56c0bf733f400e04e56f01be6802c647423c0d3da2e&o=&hp=1",
  },
  {
    src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/340035445.jpg?k=bf9efda68481bb69127a01daff9e131a87cc2bdacab20e835c17261a26d0ef31&o=&hp=1",
  },
];

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">
            Himalyan River Resort-A Riverside Resort
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mall Road, Manali, Manali Tehsil 175131 India</span>
          </div>

          <span className="hotelDistance">
            Situated in Manāli, 4.3 km from Hidimba Devi Temple
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs 3000 at this property and get a free airport
            taxi
          </span>
          <div className="hotelImages">
            {photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">
                Himalyan River Resort-A Riverside Resort
              </h1>
              <p className="hotelDesc">
                Situated in Manāli, 4.3 km from Hidimba Devi Temple, Himalyan
                River Resort-A Riverside Resort features accommodation with a
                restaurant, free private parking, a shared lounge and a garden.
                Among the facilities at this property are a 24-hour front desk
                and room service, along with free WiFi throughout the property.
                The resort has family rooms. A continental breakfast is
                available each morning at the resort. Himalyan River Resort-A
                Riverside Resort offers a terrace. Tibetan Monastery is 3.5 km
                from the accommodation, while Circuit House is 4.4 km from the
                property. The nearest airport is Kullu–Manali Airport, 37 km
                from Himalyan River Resort-A Riverside Resort.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a -night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b></b>
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
