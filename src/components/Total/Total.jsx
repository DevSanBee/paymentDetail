import React from "react";
import "./Total.css";
import Button from "../Button";

const Total = () => {
  return (
    <>
      <div className="paymentTotal">
        <div className="sub">
          <div className="subTotal">
            <b>Subtotal</b>
            <b>₦2,497.00</b>
          </div>
          <div className="estimate">
            <b>Estimated Tax</b>
            <b>₦119.64</b>
          </div>
          <div className="promotionalCode">
            <b>
              Promotional Code
              <b style={{ opacity: "0.5" }} className="coupon">
                {" "}
                Z4KXLM9A
              </b>
            </b>
            <b>₦-60.00</b>
          </div>
        </div>
        <div className="total">
          <Button padding="10px 1%">Complete Payment</Button>
          <b>
            <h3>TOTAL:₦2556.64</h3>
          </b>
        </div>
      </div>
    </>
  );
};

export default Total;
