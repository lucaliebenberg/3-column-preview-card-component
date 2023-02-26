import React from "react";

// imports
import Icon1 from "../assets/images/icon-sedans.svg";
import Icon2 from "../assets/images/icon-suvs.svg";
import Icon3 from "../assets/images/icon-luxury.svg";

const Card = () => {
  return (
    <div>
      <div className="card__container">
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
          <a href="#" className="card__link">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
