import React from "react";
import Restaurant from "./Restaurant";
import { Card } from "semantic-ui-react";
const Restaurants = props => {
  return (
    <div className="restaurants">
      {props.data.venues
        ? props.data.venues.map((venue, index) => (
            <Restaurant key={index} data={venue} showMenu={props.showMenu} />
          ))
        : null}
    </div>
  );
};

export default Restaurants;
