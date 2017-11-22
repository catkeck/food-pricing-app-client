import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = props => {
  return (
    <div className="restaurants">
      {props.data.venues
        ? props.data.venues.map((venue, index) => (
            <ol>
              <Restaurant key={index} data={venue} showMenu={props.showMenu} />
            </ol>
          ))
        : null}
    </div>
  );
};

export default Restaurants;
