//This page serves the withdrawal page as the transfer page
//The Navlinks use relative paths as seen in line 26,35,44 since we are...
//.. using the nested route feature of react router dom in the App.jsx


import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import GeneralBody from "../../Components/BodyContent/generalBody";
import SearchBar from "../../Components/SearchBar";
import CardDeposit from "./CardDeposit";
import "./transaction.scss";
import Transfer from "./Transfer";
import Withdrawal from "./Withdrawal";

import searchIcon from "../../assets/Icons/whiteSearchIcon.svg";

const Transaction = () => {

  const [tabIndex, setTabIndex] = useState(0)
  const linkTexts = ["Withdrawal", "Transfer", "Card Deposit"]
  return (
    <GeneralBody>
      <div className="content">
        <div className="titleText">TRANSACTIONS</div>

        <div className="navigation">
          <div className="primaryNav">
            <NavLink
            onClick={()=>{setTabIndex(0)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="withdrawal"
            >
              Withdrawal
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(1)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="transfer"
            >
              Transfer
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(2)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="carddeposit"
            >
              Card Deposit
            </NavLink>
            <div className="primaryNavSearch">
              <SearchBar customClass="searchBar" placeholderText="Search"/>
              <img className="searchIcon" src={searchIcon} alt="" />
              <div className="searchIconBackground"></div>
            </div>
          </div>


        </div>

        {tabIndex === 0 ?  <Withdrawal /> : (tabIndex === 1) ? <Transfer/> : (tabIndex === 2) ? <CardDeposit/> : null}
      </div>
    </GeneralBody>
  );
};

export default Transaction;
