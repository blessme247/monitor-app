import React from 'react'
import { NavLink } from 'react-router-dom'
import "./userTopDetails.scss"

// Icons Imports
import statusIcon from "../../assets/Icons/status2.svg";
import errorIcon from "../../assets/Icons/error2.svg";
import reportIcon from "../../assets/Icons/report2.svg";

const UserTopDetails = () => {
  return (
    <div className="userTopDetails ">
          <div className="detail detail1">Transaction Count</div>
          <NavLink className="detail detail2" to="/status">
            {" "}
            <span>
              <img src={statusIcon} alt="icon" />
            </span>{" "}
            Status
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
  )
}

export default UserTopDetails