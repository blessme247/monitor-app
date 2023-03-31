import React from 'react'
import Table from '../../Components/Table/Table'
import { reportsTableData } from '../../Components/Table/tableData'

const AllTerminals = () => {
  return (
    <Table headers={["Location", "Status", "Terminal ID", "Agent Name", "State Rep", "Aggregator",  "Phone No"]} data={reportsTableData}/>
  )
}

export default AllTerminals