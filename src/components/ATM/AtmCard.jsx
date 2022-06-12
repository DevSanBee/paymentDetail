import React from "react";
import Visa from "../../assets/icons8-visa.svg";
import Mastercard from "../../assets/icons8-mastercard.svg";
import Discover from "../../assets/icons8-discover.svg";
import Amex from "../../assets/icons8-amex.svg";
import "./AtmCard.css";

const Logo = ({ type, alt, active }) => {
  let imgClass = "cc-logo";

  if (active) {
    imgClass = "cc-logo active";
  }

  return (
    <>
      <img src={type} alt={`${alt} credit card logo`} className={imgClass} />
    </>
  );
};

const AtmCard = ({
  cardNumber,
  activeVisa,
  activeMastercard,
  activeDiscover,
  activeAmex,
  expirationDate,
  type,
  valid,
}) => {
  console.log(
    cardNumber,
    activeVisa,
    activeMastercard,
    activeDiscover,
    activeAmex,
    type,
    valid
  );
  return (
    <>
      <div className="atmCard">
        <span>
          <b>CARD NUMBER</b>
          <p>{cardNumber}</p>
        </span>
        <div className="stripe">
          <div className="wifiLogo">
            <img src="wifi.png" width="30px" height="30px" alt="wifi" />
          </div>
          <img src="annotation.png" alt="" />
        </div>
        <span>
          <b>EXPIRATION DATE</b>
          <p>{expirationDate}</p>
        </span>
        <span className="cardHolder">
          <p>John Doe</p>
          <div>
            <Logo type={Visa} alt="Visa" active={activeVisa} />
            <Logo
              type={Mastercard}
              alt="Mastercard"
              active={activeMastercard}
            />
            <Logo type={Discover} alt="Discover" active={activeDiscover} />
            <Logo type={Amex} alt="American Express" active={activeAmex} />
          </div>
        </span>
      </div>
    </>
  );
};

export default AtmCard;
