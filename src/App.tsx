import { BrowserRouter } from "react-router-dom";

import Router from "./Router";
import "./App.css";
import { createContext } from "react";

const historyListContext = createContext<any>([]);
function App() {
  return (
    <historyListContext.Provider value={[]}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </historyListContext.Provider>
  );
}

export default App;
