import React from "react";
import { Link } from "react-router-dom";

const Restaurant = props => {
  return (
    <div className="restaurant">
      <Link to={`/menus/${props.data.id}`}>
        <li>
          <span>{props.data.key}.</span>
          <h4> {props.data.name}</h4>
          <p>{props.data.location.address}</p>
          <p>{props.data.url}</p>
        </li>
      </Link>
    </div>
  );
};

export default Restaurant;
