
import { Routes, Route } from "react-router-dom";
import CtrData from "../components/tabledata/ctrdata.jsx"
import FileUpload from "../components/fileupload/fileupload.jsx";
import Dashboard from "../components/dashboard/dashboard.jsx";
import Layout from "../components/common/layout/layout.jsx";

export default function AppRoutes() {
    return (
<Layout>
        <Routes>
            <Route
                path="/upload"
                element={

                    <FileUpload />

                }
            />

           <Route
                path="/dashboard"
                element={

                    <Dashboard />

                }
            />

           <Route
                path="/"
                element={

                    <Dashboard />

                }
            />

            <Route
                path="/ctrdata"
                element={

                    <CtrData />

                }
            />



        </Routes>
        </Layout>

    );
}
