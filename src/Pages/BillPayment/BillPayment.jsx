import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import GeneralBody from '../../Components/BodyContent/generalBody'
import Airtime from './Airtime'
import "./billpayment.scss"
import DataSubscription from './DataSubscription'

import searchIcon from "../../assets/Icons/whiteSearchIcon.svg";
import SearchBar from '../../Components/SearchBar'

const BillPayment = () => {
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <GeneralBody>
        <div className='billpayContent'>
        <div className="navigation">
          <div className="primaryNav">
            <NavLink
            onClick={()=>{setTabIndex(0)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="airtime"
            >
              Airtime
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(1)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="data"
            >
              Data
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(2)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="gotv"
            >
              Gotv
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(3)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="dstv"
            >
              DSTV
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(4)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="startimes"
            >
              StarTimes
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(5)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="flightticket"
            >
              Flight Ticket
            </NavLink>
            <NavLink
              onClick={()=>{setTabIndex(6)}}
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="jamb"
            >
              JAMB
            </NavLink>
            <div className="primaryNavSearch">
              <SearchBar customClass="searchBar" placeholderText="Search"/>
              <img className="searchIcon" src={searchIcon} alt="" />
              <div className="searchIconBackground"></div>
            </div>
          </div>

        </div>

            {tabIndex === 0 ? <Airtime/> : (tabIndex === 1) ? <DataSubscription/> : null}
        </div>
    </GeneralBody>
  )
}

export default BillPayment