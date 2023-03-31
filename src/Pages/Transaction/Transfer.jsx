import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../Components/Table/Table";
import { stausTableData } from "../../Components/Table/tableData";

const Transfer = () => {
  return (
    <>
      <div className="navigation">
        <div className="secondaryNav">
          <NavLink to="/transaction/transfer/pos">POS</NavLink>
          <NavLink to="/transaction/transfer/app">APP</NavLink>
        </div>
      </div>

      <Table
        headers={[
          "Transaction Ref",
          "Amount",
          "Location",
          "Transfer",
          "Date & Time",
          "Status",
        ]}
        data={stausTableData}
      />
    </>
  );
};

export default Transfer;
