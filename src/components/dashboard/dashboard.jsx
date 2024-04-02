import React from 'react'
import Chart from '../common/charts/chart'
import "../dashboard/dashboard.css";
import AssociateData from '../associate/associatedata.jsx';
import { useDispatch } from 'react-redux';
import {fetchDataByYear} from "../../features/redux/fileupload/fileUploadAction.js";

export default function Dashboard() {
  const disptach = useDispatch();
  const getDataByYear = (e) => {
//console.log(e.target.value)
    disptach(fetchDataByYear(e.target.value));

  }

  return (
    <div className="dashboard-container">
      <div className="chart-container">
        <select name="years" id="years" onChange={getDataByYear} style={{ marginLeft: "16px" }}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <Chart />
      </div>
      <div className="table-container">
        {/* Add AgGrid table component here */}
        <AssociateData />
      </div>
    </div>
  )
}