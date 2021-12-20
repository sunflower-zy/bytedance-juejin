import { BrowserRouter } from "react-router-dom";

import BasicLayout from "./Layouts/BasicLayout";

import Router from "./Router";

function App() {
    return (
        <BrowserRouter>
            <BasicLayout>
                <Router />
            </BasicLayout>
        </BrowserRouter>
    );
}

export default App;
