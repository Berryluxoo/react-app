import React from "react";


import "./search.css";

export default function Search() {
  return (
    <form className="Search">
      <div className="row">
        <div className="col-5">
          <input
            className="search-style form-control"
            type="search"
            placeholder="Enter the city"
            autocomplete="off"
            autofocus="on"
          />
        </div>
        <div className="col-7 button-block">
          <input type="submit" value="Search" className="btn btn-primary" />
          <button className="btn btn-success ms-1">My Location</button>
        </div>
      </div>
    </form>
  );
}
