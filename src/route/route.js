
import { Routes, Route } from "react-router-dom";
import CtrData from "../components/tabledata/ctrdata.jsx"
import FileUpload from "../components/fileupload/fileupload.jsx";
import Dashboard from "../components/dashboard/dashboard.jsx";


export default function AppRoutes() {
    return (
<Dashboard>
        <Routes>
            <Route
                path="/upload"
                element={

                    <FileUpload />

                }
            />

            <Route
                path="/ctrdata"
                element={

                    <CtrData />

                }
            />



        </Routes>
        </Dashboard>

    );
}
