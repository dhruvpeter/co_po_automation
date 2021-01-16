import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ViewStudent from "../Student/ViewStudent/ViewStudent";
import AddMark from "../Student/AddMark/AddMark";
import AssignStudent from "../Student/AssignStudent/AssignStudent";
import SurveyPO from "../Survey/SurveyPO/SurveyPO";
import SurveyPSO from "../Survey/SurveyPSO/SurveyPSO";
import Internal1 from "../Student/AddMark/Internal1/Internal1";
import Internal2 from "../Student/AddMark/Internal2/Internal2";
import Assignment1 from "../Student/AddMark/Assignment1/Assignment1";
import Assignment2 from "../Student/AddMark/Assignment2/Assignment2";
import FinalSem from "../Student/AddMark/FinalSem/FinalSem";


export default function FacultyLinks() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/faculty/student/add-mark" exact component={AddMark} />
        <Route path="/faculty/student/add-mark/internal-1" exact component={Internal1} />
        <Route path="/faculty/student/add-mark/internal-2" exact component={Internal2} />
        <Route path="/faculty/student/add-mark/assignment-1" exact component={Assignment1} />
        <Route path="/faculty/student/add-mark/assignment-2" exact component={Assignment2} />
        <Route path="/faculty/student/add-mark/final-sem" exact component={FinalSem} />
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
