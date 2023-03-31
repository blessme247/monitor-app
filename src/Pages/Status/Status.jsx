import React, { useEffect } from "react";
import SearchBar from "../../Components/SearchBar";
import { stausTableData } from "../../Components/Table/tableData";
import Table from "../../Components/Table/Table";
import "./status.scss";

//Icons/Images Import
import successIcon from "../../assets/Icons/successIcon.svg";
import pendingIcon from "../../assets/Icons/pendingIcon.svg";
import failedIcon from "../../assets/Icons/failedIcon.svg";
import searchIcon from "../../assets/Icons/searchIcon.svg";
import GeneralBody from "../../Components/BodyContent/generalBody";

const Status = () => {
  
  return (
      <GeneralBody>
          <div className="topBar">
            <div className="titleText">STATUS</div>
            <div className="statusCategory">
              <div className="success">
                <span>
                  <img src={successIcon} alt="success" />
                </span>{" "}
                Successful
              </div>
              <div className="pending">
                <span>
                  <img src={pendingIcon} alt="pending" />
                </span>
                Pending
              </div>
              <div className="failed">
                <span>
                  <img src={failedIcon} alt="failed" />
                </span>
                Failed
              </div>
            </div>
          </div>
          <div className="content">
            <div className="searchBarWrapper">
              <SearchBar
                customClass="searchBar"
                placeholderText="Search Transaction Status"
              />
              <img className="searchIcon" src={searchIcon} alt="" />
            </div>
            <div className="contentTitle">ALL TRANSACTION</div>
            <Table
              headers={[
                "Transaction Ref",
                "Amount",
                "Location",
                "Channel",
                "Date & Time",
                "Status",
              ]}
              data={stausTableData}
            />
          </div>
        </GeneralBody>

  );
};

export default Status;
