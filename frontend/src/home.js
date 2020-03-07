import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

const AppWithRouter = () => (
  <BrowserRouter>
    <Route
      path="/"
      render={e => (e.location.pathname === "/" ? <App value={0} /> : "")}
    />
    <Route path="/bookinngs/today/:roomId" render={() => <App value={1} />} />
  </BrowserRouter>
);

export default AppWithRouter;
