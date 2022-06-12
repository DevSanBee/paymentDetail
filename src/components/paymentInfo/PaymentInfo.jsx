import React from "react";
import "./paymentInfo.css";
import BasicTextFields from "../paymentForm/PaymentForm";

const PaymentInfo = () => {
  return (
    <>
      <div className="paymentInfo">
        <section className="section1">
          <span>
            <b>Payment Information</b>
            <span>Choose your method of payment</span>
          </span>
          <span className="paymentMethod">
            <b>
              <input
                type="radio"
                name="creditCard"
                id="creditCard"
                className="radio"
              />
              <label htmlFor="creditCard">
                <img
                  src="creditCard.png"
                  alt="creditCard"
                  className="creditCard"
                />
              </label>
            </b>
            <b>
              <input
                type="radio"
                name="creditCard"
                id="paypal"
                className="radio"
              />
              <label htmlFor="creditCard">
                <img src="paypal.png" alt="paypal" className="paypal" />
              </label>
            </b>
          </span>
        </section>
        <section className="section2">
          <div>
            <BasicTextFields />
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
};

export default PaymentInfo;
