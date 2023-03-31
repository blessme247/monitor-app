import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import AdminSideNav from "../SideNav/AdminSideNav";
import UserSideNav from "../SideNav/UserSideNav";
import "./generalBody.scss"



const GeneralBody = ({children}) => {

  const [isUser, setUser] = useState(true)
  return (
    <div className="bodyWrapper">
      <Navbar />
      <div className="contentWrapper">

        {isUser ? <UserSideNav /> : <AdminSideNav /> }
        
        <section className="sectionWrapper"> 
        {children}
        </section>
      </div>
    </div>
  );
};

export default GeneralBody;
