import React, { useState, useEffect, useRef } from "react";
import NavLinkComponent from "./navLink";
import { gsap } from "gsap";
import "./sidenav.scss";

//Icons Import
import dashboardIcon from "../../assets/Icons/dashboardIcon.svg";
import transactionIcon from "../../assets/Icons/transactionIcon.svg";
import nairaIcon from "../../assets/Icons/naira.svg";
import reportIcon from "../../assets/Icons/report.svg";

const UserSideNav = () => {
  useEffect(() => {
    gsap.set(".secondaryNavLink", { yPercent: 25, ease: "ease-in-out" });
    gsap.to(".secondaryNavLink", {
      yPercent: 0,
      ease: "ease-in-out",
      opacity: "1",
      delay: "1",
    });
  }, []);

  return (
    <aside className="sideNavWrapper">
      <div className="navLinks">
        <NavLinkComponent
          linkURL="/dashboard"
          linkIcon={dashboardIcon}
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkText="DASHBOARD"
        />
        <NavLinkComponent
          linkIcon={transactionIcon}
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkURL="/transaction/withdrawal"
          linkText="TRANSACTION"
          secondaryLinkUrl1="/transaction/withdrawal"
          secondaryLinkUrl2="/transaction/transfer"
          secondaryLinkUrl3="/transaction/carddeposit"
          secondaryLinkUrl1Text="Withdrawal"
          secondaryLinkUrl2Text="Transfer"
          secondaryLinkUrl3Text="Card Deposit"
        />
        <NavLinkComponent
          linkIcon={dashboardIcon}
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkURL="/status"
          linkText="STATUS"
          secondaryLinkUrl1="/status/successful"
          secondaryLinkUrl2="/status/pending"
          secondaryLinkUrl3="/status/failed"
          secondaryLinkUrl1Text="Successful"
          secondaryLinkUrl2Text="Pending"
          secondaryLinkUrl3Text="Failed"
        />
        <NavLinkComponent
          linkIcon={nairaIcon}
          linkURL="/billpayment/airtime"
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkText="BILL PAYMENT"
        />
        <NavLinkComponent
          linkIcon={nairaIcon}
          linkURL="/errors"
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkText="ERRORS"
        />
        <NavLinkComponent
          linkIcon={reportIcon}
          customClass={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
          linkURL="/reports"
          linkText="REPORTS"
          secondaryLinkUrl1="/reports/agents"
          secondaryLinkUrl2="/reports/state"
          secondaryLinkUrl3="/reports/users"
          secondaryLinkUrl1Text="Agents"
          secondaryLinkUrl2Text="State"
          secondaryLinkUrl3Text="Users"
        />
      </div>
    </aside>
  );
};

export default UserSideNav;
