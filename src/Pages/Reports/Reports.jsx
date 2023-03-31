import React from 'react'
import { NavLink } from 'react-router-dom'
import GeneralBody from '../../Components/BodyContent/generalBody'
import SearchBar from '../../Components/SearchBar'
import "./reports.scss"
import searchIcon from "../../assets/Icons/whiteSearchIcon.svg";
import userIcon from "../../assets/Icons/blackUser.svg"
import AllTerminals from './AllTerminals'

const Reports = () => {
  return (
    <GeneralBody>

        <section className="reportsContent">
            <div className="reportsTop">
                <NavLink className="link firstLink">ALL REPORTS</NavLink>

                <div className="searchBarWrapper">
                <SearchBar customClass="searchBar" placeholderText="Search"/>
              <img className="searchIcon" src={searchIcon} alt="" />
              <div className="searchIconBackground"></div>
                </div>

                <div className="links"> 
                <div className="link"><img src={userIcon}/><NavLink>Agent</NavLink></div>
                <div className="link"><img src={userIcon}/><NavLink>State Rep</NavLink></div>
                <div className="link"><img src={userIcon}/><NavLink>Aggregator</NavLink></div>
                </div>
            </div>

            <div className="terminalTypes">
                <NavLink>XTRAPAY TERMINALS 200</NavLink>
                <NavLink>CLIENTS' TERMINALS 150 </NavLink>

            </div>

            <AllTerminals/>
        </section>
    </GeneralBody>
  )
}

export default Reports