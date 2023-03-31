import React, { useState } from "react";
import GeneralBody from "../../Components/BodyContent/generalBody";
import { transactionData } from "../../Components/Chart/ChartData";
import { BarChart } from "../../Components/Chart/BarChart";
import { Chart as ChartJS } from "chart.js/auto"
import "./dashboard.scss";

// Icons Imports
import balanceIcon from "../../assets/Icons/wallet_balance.svg"
import AdminTopDetails from "./AdminTopDetails";
import UserTopDetails from "./UserTopDetails";

const Dashboard = () => {

  const [isAdmin, setIsAdmin] = useState(false)
  const [transactionCount, setTransactionCount] = useState({
    labels: transactionData.map((data) => data.month),
    datasets: [
      {
        label: "transaction count",
        data: transactionData.map((data) => data.transactionCount),
        // backgroundColor: "#4DD2EF",
        backgroundColor: "#24606D",
        borderWidth: 1.5,
        borderRadius: 0,
        barPercentage: 0.5,
      },
    ],
  });
  return (
    <GeneralBody>
      <div className="dashboardContentWrapper">

        <div className="topDetails firstTopDetails">
        <div className="titleText">DASHBOARD</div>
        <div className="rightText">
          <img src={balanceIcon} alt="balance" /> <span> Available Bal </span>
        </div>
        </div>

        {isAdmin ? <AdminTopDetails/> : <UserTopDetails />}

        <div className="chartsContainer">

        <div className="chartBoxWrapper">
        <BarChart chartData= {transactionCount} />
        </div>

        <section className="pieChartWrapper">
            <div className="sectionTop">
              <p className="sectionTopTitle"> Transactions Count</p>
              <p className="sectionTopDropdownTitle">Monthly</p>
            </div>

            <div className="sectionMiddle">

            <div className="pieCharts">
            <div className="firstPieChart"></div>
            <div className="secondPieChart"></div>
            <div className="thirdPieChart"></div>

            </div>
            <div className="chartBrief">
              <div> <p> All</p> <span className="span1"></span></div>
              <div><p> NIBSS </p> <span className="span2"></span></div>
              <div><p> Interswitch</p> <span className="span3"></span></div>
            </div>
            </div>

            <div className="sectionBottom">
              <div className="daily">
                  <p className="title">Daily</p>
                  <p className="amount">23500</p>
              </div>
              <div className="weekly">
              <p className="title">Weekly</p>
                  <p className="amount">234500</p>
              </div>
              <div className="monthly">
              <p className="title">monthly</p>
                  <p className="amount">2345500</p>
              </div>
            </div>
        </section>
        </div>
      </div>
    </GeneralBody>
  );
};

export default Dashboard;
