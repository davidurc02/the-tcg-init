import React, { useState } from "react";
import "./App.css";
import { MemoryRouter as Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { routes } from "./routes";

function App() {
  const [apiResponse, setApiResponse] = useState({});
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse({ apiResponse: res }));
  };
  callAPI();
  return (
    <>
      <Router>
        <BrowserRouter>{routes()}</BrowserRouter>
      </Router>
      {(() => console.log(apiResponse))()}
    </>
  );
}

export default App;
