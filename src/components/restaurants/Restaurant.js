import React from "react";
import { Link } from "react-router-dom";

const Restaurant = props => {
  console.log(props);
  return (
    <div className="restaurant">
      <Link to={`/menus/${props.data.id}`}>
        <li>
          <span>{props.key}.</span>
          {props.data.name}
          <p>{props.data.location.address}</p>
          <p>{props.data.url}</p>
        </li>
      </Link>
    </div>
  );
};

export default Restaurant;
