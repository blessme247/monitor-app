import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../Components/Table/Table";
import { stausTableData } from "../../Components/Table/tableData";

const CardDeposit = () => {
  return (
    <>
        <div className="navigation">
      <div className="secondaryNav">
        <NavLink to="/transaction/carddeposit">All</NavLink>
        {/* <NavLink to="/transaction/withdrawal/app">APP</NavLink> */}
      </div>
        </div>

      <Table
          headers={[
            "Transaction Ref",
            "Amount",
            "Location",
            "Card Type",
            "Date & Time",
            "Status",
          ]}
          data={stausTableData}
        />
    </>
  );
};

export default CardDeposit;
