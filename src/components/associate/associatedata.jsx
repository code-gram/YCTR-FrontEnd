import React, { useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../associate/associatedata.css';
import {useSelector} from "react-redux";
import { useEffect } from 'react';


const AssociateData = () => {

    const yeralyData = useSelector(state => state.fileupload.yeralydata);
    //"emp_id": 1100332,
        //"name": "Mahesh Tukaram Surnar",
        //"email_id": "mahesh.surnar@yash.com",
        //"grade": "E1",
      //  "resource_type": "Permanent",
    //    "training_stack": "Java+React"
    // Define column definitions
    const columnDefs = [
        { headerName: 'Emp Id', field: 'emp_id', sortable: true, filter: true },
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Email', field: 'email_id', sortable: true, filter: true },
        { headerName: 'Grade', field: 'grade', sortable: true, filter: true },
        { headerName: 'Resource Type', field: 'resource_type', sortable: true, filter: true },
        { headerName: 'Training Stack', field: 'training_stack', sortable: true, filter: true }   
        // Add more columns as needed
    ];

  


    // Define row data
    const [rowData,setRowData] = useState([]);
    useEffect(() => {
        setRowData(yeralyData);
      }, [yeralyData]);


    return (

        <div className="ag-theme-alpine" style={{ height: '90%', width: '100%' ,padding:"2px"}}>
            <h2 className='table-title'>Associate Details</h2>
            <AgGridReact
                columnDefs={columnDefs} // Pass column definitions
                rowData={rowData}       // Pass row data
                defaultColDef={{ filter: true }} // Set default column definitions
            />
        </div>

    );
};


export default AssociateData;
