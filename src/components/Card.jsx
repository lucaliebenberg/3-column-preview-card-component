import React from "react";

// imports
import Icon1 from "../assets/images/icon-sedans.svg";
import Icon2 from "../assets/images/icon-suvs.svg";
import Icon3 from "../assets/images/icon-luxury.svg";

const Card = () => {
  return (
    <div className="wrapper">
      <div
        className="card__container sedan"
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 0,
        }}
      >
        <div className="card__icon">
          <img src={Icon1} alt="Sedans" className="icon" />
        </div>

        <div className="card__top">
          <h1 className="card__title">Sedans</h1>
          <p className="card__para">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
        </div>
        <div className="card__bottom">
          <a href="#" className="card__link1">
            Learn more
          </a>
        </div>
      </div>
      <div
        className="card__container suv"
        style={{ backgroundColor: "#006971", borderRadius: 0 }}
      >
        <div className="card__icon">
          <img src={Icon2} alt="Sedans" className="icon" />
        </div>

        <div className="card__top">
          <h1 className="card__title"> SUVs</h1>
          <p className="card__para">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
        </div>
        <div className="card__bottom">
          <a href="#" className="card__link2">
            Learn more
          </a>
        </div>
      </div>
      <div
        className="card__container luxury"
        style={{
          backgroundColor: "#004140",
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 0,
          borderTopLeftRadius: 0,
        }}
      >
        <div className="card__icon">
          <img src={Icon3} alt="Sedans" className="icon" />
        </div>

        <div className="card__top">
          <h1 className="card__title">Luxury</h1>
          <p className="card__para">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <div className="card__bottom">
          <a href="#" className="card__link3">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
