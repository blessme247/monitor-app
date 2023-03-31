import React from "react";
import { NavLink } from "react-router-dom";

// Icons Imports
import statusIcon from "../../assets/Icons/status2.svg";
import profitIcon from "../../assets/Icons/naira2.svg";
import errorIcon from "../../assets/Icons/error2.svg";
import reportIcon from "../../assets/Icons/report2.svg";

const AdminTopDetails = () => {
  return (
    <div className="topDetails secondTopDetails">
      <div className="detail detail1">Transaction Count</div>
      <NavLink className="detail detail2" to="/status">
        {" "}
        <span>
          <img src={statusIcon} alt="icon" />
        </span>{" "}
        Status
      </NavLink>
      <NavLink className="detail detail3" to="/profit">
        {" "}
        <span>
          <img src={profitIcon} alt="icon" />
        </span>
        Profit
      </NavLink>
      <NavLink className="detail detail4" to="/errors">
        {" "}
        <span>
          <img src={errorIcon} alt="icon" />
        </span>
        Errors
      </NavLink>
      <NavLink className="detail detail5" to="/reports">
        {" "}
        <span>
          <img src={reportIcon} alt="icon" />
        </span>
        Reports
      </NavLink>
    </div>
  );
};

export default AdminTopDetails;
