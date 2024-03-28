import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUploadFileData } from '../../features/redux/fileupload/fileUploadAction';
import '../tabledata/ctrdata.css';
function CtrData() {
    const dispatch = useDispatch();
    const fileUploadData = useSelector(state => state.fileupload.fileupload);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        dispatch(fetchUploadFileData({}));
    }, [dispatch]);
    useEffect(() => {
        setData(fileUploadData);
    }, [fileUploadData]);
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
    };
    // AG Grid column definitions
    const columnDefs = [
        { headerName: 'Emp ID', field: 'emp_id' },
        { headerName: 'Name', field: 'name' },
        { headerName: 'Email ID', field: 'email_id' },
        { headerName: 'Grade', field: 'grade' },
        { headerName: 'Resource Type', field: 'resource_type' },
        { headerName: 'Training Stack', field: 'training_stack' },
        { headerName: 'Training Name', field: 'training_name' },
        { headerName: 'Purpose to attend training', field: 'purpose_to_attend_training' },
        { headerName: 'Training Duration(Days)', field: 'training_duration' },
        { headerName: 'Training Start Date', field: 'training_start_date' },
        { headerName: 'Training End Date', field: 'training_end_date' },
        { headerName: 'Current Skills', field: 'current_skills' },
        { headerName: 'Upgraded Skills', field: 'upgraded_skills' },
        { headerName: 'Pre Assessment score', field: 'pre_assessment_score' },
        { headerName: 'Final Score', field: 'final_score' },
        { headerName: 'Current Allocation', field: 'current_allocation' },
        { headerName: 'Project', field: 'project' },
        { headerName: 'Current location', field: 'current_location' },
        { headerName: 'Status', field: 'status' },
        { headerName: 'Feedback / Remarks', field: 'feedback' }
    ];


    return (
        <div style={{padding:"10px"}}>
            <div>
                <input
                    type="text"
                    style={{

                        margin: "7px 0px 6px",
                        width: "24vw",
                    }}
                    placeholder="Search..."
                    className='searchcontainer'
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <div className='ag-theme-alpine' style={{ height: '400px', width: '100%' }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={data ? data.filter((item) => {
                        if (!item) return false;
                        const searchLowerCase = search.toLowerCase();
                        for (let key in item) {
                            if (item[key] && item[key].toString().toLowerCase().includes(searchLowerCase)) {
                                return true;
                            }
                        }
                        return false;
                    }) : false
                    }
                    defaultColDef={{ filter: true }}
                />
            </div>
        </div>
    );
}
export default CtrData;