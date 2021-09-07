import React from "react";
import { Link } from "react-router-dom";

const MyHeader = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="d-none d-lg-block">
        <div className="header">
          <h1>Baby Name Stats</h1>
        </div>
      </div>

      <div className="d-lg-none">
        <div className="headerMobile">
          <h1>Baby Name Stats</h1>
        </div>
      </div>
    </Link>
  );
};

export default MyHeader;
