import { Routes, Route } from "react-router-dom";
import BasicLayout from "./Layouts/BasicLayout";
import Article from "./Pages/Article";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />}>
                <Route path="recommend" element={<Article />}></Route>
                <Route path="backend" element={<Article />}></Route>
                <Route path="frontend" element={<Article />}></Route>
                <Route path="Android" element={<Article />}></Route>
                <Route path="IOS" element={<Article />}></Route>
                <Route path="*" element={<Article />}></Route>
            </Route>
        </Routes>
    );
}

export default Router;
