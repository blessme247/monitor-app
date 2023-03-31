import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./sidenav.scss"

const NavLinkComponent = ({
  customClass,
  linkIcon,
  linkText,
  linkURL,
  func,
  secondaryLinkUrl1,
  secondaryLinkUrl2,
  secondaryLinkUrl3,
  secondaryLinkUrl1Text,
  secondaryLinkUrl2Text,
  secondaryLinkUrl3Text,
}) => {
  return (
    <>
      <NavLink
        to={linkURL}
        className={customClass}
        onClick={func}
      >
          <img className="icon" src={linkIcon} alt="icon" />  {linkText}
        
      </NavLink>
  
      <div className="secondaryNavLinksWrapper">
        <Link className="secondaryNavLink" to={secondaryLinkUrl1}>{secondaryLinkUrl1Text}</Link> 
        <Link className="secondaryNavLink" to={secondaryLinkUrl2}>{secondaryLinkUrl2Text}</Link> 
        <Link className="secondaryNavLink lastItem" to={secondaryLinkUrl3}>{secondaryLinkUrl3Text}</Link>
        </div>
    </>
  );
};

export default NavLinkComponent;
