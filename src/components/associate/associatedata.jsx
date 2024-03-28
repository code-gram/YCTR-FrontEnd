import React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from 'ag-grid-react';
import '../associate/associatedata.css';


const AssociateData = () => {
    // Define column definitions
    const columnDefs = [
        { headerName: 'Make', field: 'make', sortable: true, filter: true },
        { headerName: 'Model', field: 'model', sortable: true, filter: true },
        { headerName: 'Price', field: 'price', sortable: true, filter: true }
        // Add more columns as needed
    ];


    // Define row data
    const rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
        // Add more rows as needed
    ];


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
