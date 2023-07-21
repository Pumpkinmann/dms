import React from "react";
import Table from "./component/table";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavigation from "./side/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main className="main"> 
        <Routes>
          <Route
            exact="true"
            path="/ruanhuaye"
            element={<Table></Table>}
          ></Route>
          <Route exact="true" path="/" element={<Table></Table>}></Route>
          <Route path="*" element={<Table></Table>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
