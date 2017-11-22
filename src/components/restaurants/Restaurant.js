import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
const Restaurant = props => {
  return (
    <div className="restaurant">
      <Link to={`/menus/${props.data.id}`}>
        <li>
          <span>{props.data.key}.</span>
          <h1> {props.data.name}</h1>
          <p>{props.data.location.address}</p>
          <p>{props.data.url}</p>
        </li>
      </Link>
    </div>
  );
};

export default Restaurant;
