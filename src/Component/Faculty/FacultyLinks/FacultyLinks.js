import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ViewStudent from "../Student/ViewStudent/ViewStudent";
import AddMark from "../Student/AddMark/AddMark";
import AssignStudent from "../Student/AssignStudent/AssignStudent";
import SurveyPO from "../Survey/SurveyPO/SurveyPO";
import SurveyPSO from "../Survey/SurveyPSO/SurveyPSO";
export default function FacultyLinks() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faculty/student/add-mark" exact component={AddMark} />
        <Route
          path="/faculty/student/view-student"
          exact
          component={ViewStudent}
        />
        <Route
          path="/faculty/student/assign-student"
          exact
          component={AssignStudent}
        />
        <Route path="/faculty/survey/surveyPO" exact component={SurveyPO} />
        <Route path="/faculty/survey/surveyPSO" exact component={SurveyPSO} />
      </Switch>
    </Router>
  );
}
