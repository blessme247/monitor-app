import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = () => {
  return (
    <div className="navigation">
          <div className="primaryNav">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="/transaction/withdrawal"
            >
              Withdrawal
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="/transaction/transfer"
            >
              Transfer
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link active" : "link"
              }
              to="/transaction/carddeposit"
            >
              Card Deposit
            </NavLink>
          </div>

        </div>
  )
}

export default PageNavigation