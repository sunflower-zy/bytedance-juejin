import { Routes, Route } from "react-router-dom";
import FrontEnd from "./Pages/FrontEnd";
import BackEnd from "./Pages/BackEnd";
import Recommend from "./Pages/Recommend";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Recommend />}></Route>
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/frontend" element={<FrontEnd />} />
            <Route path="/backend" element={<BackEnd />} />
        </Routes>
    );
}

export default Router;
