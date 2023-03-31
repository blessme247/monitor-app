import { Route, Routes } from "react-router-dom";
import Airtime from "./Pages/BillPayment/Airtime";
import BillPayment from "./Pages/BillPayment/BillPayment";
import DataSubscription from "./Pages/BillPayment/DataSubscription";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Reports from "./Pages/Reports/Reports";
import Status from "./Pages/Status/Status";
import CardDeposit from "./Pages/Transaction/CardDeposit";
import Transaction from "./Pages/Transaction/Transaction";
import Transfer from "./Pages/Transaction/Transfer";
import Withdrawal from "./Pages/Transaction/Withdrawal";


function App() {

  return (
    <Routes> 
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/status" element={<Status />} />
      <Route path="/transaction" element={<Transaction />} >
        <Route index element={<Withdrawal/>}/> 
        <Route path="withdrawal" element={<Withdrawal/>}/> 
        <Route path="transfer" element={<Transfer />}/> 
        <Route path="carddeposit" element={<CardDeposit />}/> 
      </Route>
      <Route path="/billpayment" element={<BillPayment/>}>
        <Route index element={<Airtime/>}/>
        <Route path="airtime" element={<Airtime />}/>
        <Route path="data" element={<DataSubscription />}/>
      </Route>
      <Route path="/reports" element={<Reports/>}>

      </Route>
      

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
