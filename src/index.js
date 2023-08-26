import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import Dashboard from "layouts/Admin";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ActiveUsers from "views/Dashboard/Dashboard/components/ActiveUsers";

// ReactDOM.render(
//   // <HashRouter basename="/admin/dashboard">
//   <HashRouter basename="/">
//   {/* <HashRouter> */}
//     <Switch>
//     <Route path={`/`} component={Dashboard} />

//       <Route path={`/auth`} component={AuthLayout} />
//       <Route path={`/admin`} component={AdminLayout} />
//       <Route path={`/rtl`} component={RTLLayout} />
//       {/* <Redirect from={`/`} to="/admin/dashboard" /> */}
//     </Switch>
//   </HashRouter>,
//   document.getElementById("root")
// );


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path={`/`} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));