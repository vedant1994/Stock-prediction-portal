import React from "react";
import { Link } from "react-router";

const Button = (props) => {
  return (
    <>
      <Link to={props.url} className={`btn ${props.class}`}>
        {props.text}
      </Link>
    </>
  );
};

export default Button;
