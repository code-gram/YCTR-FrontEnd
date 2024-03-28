import React from 'react'
import Chart from '../common/charts/chart'
import "../dashboard/dashboard.css";
import AssociateData from '../associate/associatedata.jsx';


export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <Chart />
      </div>
      <div className="table-container">
        {/* Add AgGrid table component here */}
         <AssociateData /> 
      </div>
    </div>
  )
}