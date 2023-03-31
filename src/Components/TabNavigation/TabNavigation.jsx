//On line 11, LinkText is converted to lowerCase and then we Use the replace..
//.. method to remove white spaces between two texts

import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const TabNavigation = ({ linkTexts, }) => {
  return (
    <>
      {linkTexts.map((linkText, index) => {
        const tabURL = linkText.toLowerCase().replace(/ /g, "");
        return (
          <NavLink
            onClick={() => {
              setTabIndex(index);
            }}
            className={({ isActive }) => (isActive ? "link active" : "link")}
            to={`${tabURL}`}
          >
            {linkText}
          </NavLink>
        );
      })}
    </>
  );
};

export default TabNavigation;
