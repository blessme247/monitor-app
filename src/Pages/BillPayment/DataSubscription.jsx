import React from "react";
import Table from "../../Components/Table/Table";
import { stausTableData } from "../../Components/Table/tableData";

const DataSubscription = () => {
  return (
    <>

      <Table
        headers={[
          "Transaction Ref",
          "Amount",
          "Location",
          "Duration",
          "Date & Time",
          "Status",
        ]}
        data={stausTableData}
      />
    </>
  );
};

export default DataSubscription;
