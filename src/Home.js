import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="121121212"
            title="The lean start"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="23233232"
            title="Laptops and Desktop Computers with upto 30% off"
            price={5100.99}
            image="https://m.media-amazon.com/images/I/41Hxk3Dl5RL.__AC_SY200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="34343434"
            title="Up to 40% off Water Purifiers & Dispensers"
            price={249.99}
            image="https://m.media-amazon.com/images/I/41tD5oEuGNL.__AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="45454554"
            title="Ptron Mobile Accessories | Starting at Rs.179"
            price={549.99}
            image="https://m.media-amazon.com/images/I/418XVTLmVNL.__AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="565656656"
            title="For efficient home working"
            price={109.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="67676767"
            title="Monitor Screen Curved LED-Super Ultra Wide Dual WQHD 5120 x 144"
            price={2541.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
