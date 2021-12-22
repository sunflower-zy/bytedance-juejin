import { Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />} />
            <Route />
        </Routes>
    );
}

export default Router;
