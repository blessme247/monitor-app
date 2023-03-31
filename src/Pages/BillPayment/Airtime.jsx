import React from "react";
import { NavLink } from "react-router-dom";
import Table from "../../Components/Table/Table";
import { stausTableData } from "../../Components/Table/tableData";

const Airtime = () => {
  return (
    <>

      <Table
        headers={[
          "Transaction Ref",
          "Amount",
          "Location",
          "Network",
          "Date & Time",
          "Status",
        ]}
        data={stausTableData}
      />
    </>
  );
};

export default Airtime;
