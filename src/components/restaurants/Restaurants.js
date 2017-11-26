import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = props => {
  return (
    <div>
      {props.data.venues ? (
        <div className="restaurants">
          {props.data.venues.map((venue, index) => (
            <ol>
              <Restaurant key={index} data={venue} showMenu={props.showMenu} />
            </ol>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Restaurants;
