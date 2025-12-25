import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            Welcome to your next-generation Stock Prediction Portal—where data
            meets intuition. We analyze market trends, price movements, and
            momentum signals to help you stay a step ahead in a fast-moving
            market. Whether you’re tracking daily swings or planning long-term
            positions, our insights are designed to be clear, timely, and
            actionable. No noise—just focused analytics that help you make
            informed decisions.
          </p>
          <Button text="Login" class="btn-outline-info" />
        </div>
      </div>
    </>
  );
};

export default Main;
