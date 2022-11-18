import React from "react";
import Humidity from "./Humidity";
import CityName from "./CityName";
import Wind from "./Wind";
import Img from "./Img";
import Temperature from "./Temperature";
import UpdateDate from "./UpdateDate";
import Description from "./Description";

import "./summary.css";

export default function Summary() {
  return (
    <div className="Summary">
      <div className="weather-summary">
        <div className="weather-header">
          <CityName />
          <UpdateDate />
          <Description />
        </div>
        <div className="weather-details">
          <div className="row">
            <div className="d-flex col-7">
              <Img />
              <Temperature />
              <div className="d-flex">°C</div>
            </div>
            <div className="col-5 details">
              <Humidity />
              <Wind />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
