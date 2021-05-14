import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SingleForm from "./pages/SingleForm";
import TabbedForm from "./pages/TabbedForm";
import TabbedFormV2 from "./pages/TabbedFormV2";
import TabbedFormV3 from "./pages/TabbedFormV3";

// import ControlledForm from "./ControlledForm";
// import { fields } from "./fields";

// QUESTIONS
// radio fields ✅
// checkboxes ✅
// dropdpwns ✅
// conditional radio checkboxes and radio options (groups / followUps) ✅
// default values ✅
// upload document https://share.getcloudapp.com/7KuPNR05

// tabbed forms
// field arrays ✅

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Link to="/single-form">Single form</Link>
        <br />
        <br />
        <Link to="/tabbed-form">Tabbed form</Link>
      </Route>
      {/* <Route exact path="/single-form">
        <SingleForm />
      </Route>
      <Route exact path="/tabbed-form">
        <TabbedForm />
      </Route>
      <Route exact path="/tabbed-form-v2">
        <TabbedFormV2 />
      </Route> */}
      <Route exact path="/tabbed-form-v3">
        <TabbedFormV3 />
      </Route>
    </Switch>
  </Router>
);

export default App;
