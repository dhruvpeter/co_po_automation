import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import CourseDetails from "../Course/CourseDetails/CourseDetails";
import SelectedCourse from "../Course/CourseDetails/SelectedCourse/SelectedCourse";
import AddCourse from "../Course/AddCourse/AddCourse";
import ViewFaculty from "../Faculty/ViewFaculty/ViewFaculty";
import SelectedFaculty from "../Faculty/ViewFaculty/SelectedFaculty/SelectedFaculty";
import AssignFaculty from "../Faculty/ViewFaculty/AssignFaculty/AssignFaculty";
import AddFaculty from "../Faculty/AddFaculty/AddFaculty";
import ViewStudent from "../Student/ViewStudent/ViewStudent";
import EditStudent from "../Student/ViewStudent/EditStudent/EditStudent";
import AddStudent from "../Student/AddStudent/AddStudent";
import SurveyFacultyPO from "../Survey/SurveyFacultyPO/SurveyFacultyPO";
import SurveyFacultyPSO from "../Survey/SurveyFacultyPSO/SurveyFacultyPSO";
import SurveyEmployerPO from "../Survey/SurveyEmployerPO/SurveyEmployerPO";
import SurveyEmployerPSO from "../Survey/SurveyEmployerPSO/SurveyEmployerPSO";
import CO from "../Result/CO/CO";
import PO from "../Result/PO/PO";
import PSO from "../Result/PSO/PSO";
export default function AdminLinks() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Home} />
        <Route
          path="/admin/course/course-details"
          exact
          component={CourseDetails}
        />
        <Route
          path="/admin/course/course-details/selected-course"
          exact
          component={SelectedCourse}
        />
        <Route path="/admin/course/add-course" exact component={AddCourse} />
        <Route
          path="/admin/faculty/view-faculty"
          exact
          component={ViewFaculty}
        />
        <Route
          path="/admin/faculty/view-faculty/selected-faculty"
          exact
          component={SelectedFaculty}
        />
        <Route
          path="/admin/faculty/view-faculty/assign-faculty"
          exact
          component={AssignFaculty}
        />
        <Route path="/admin/faculty/add-faculty" exact component={AddFaculty} />
        <Route
          path="/admin/student/view-student"
          exact
          component={ViewStudent}
        />
        <Route
          path="/admin/student/view-student/edit-student"
          exact
          component={EditStudent}
        />
        <Route path="/admin/student/add-student" exact component={AddStudent} />
        <Route
          path="/admin/survey/survey-employerPO"
          exact
          component={SurveyEmployerPO}
        />
        <Route
          path="/admin/survey/survey-employerPSO"
          exact
          component={SurveyEmployerPSO}
        />
        <Route
          path="/admin/survey/survey-facultyPO"
          exact
          component={SurveyFacultyPO}
        />
        <Route
          path="/admin/survey/survey-facultyPSO"
          exact
          component={SurveyFacultyPSO}
        />
        <Route path="/admin/result/co" exact component={CO} />
        <Route path="/admin/result/po" exact component={PO} />
        <Route path="/admin/result/pso" exact component={PSO} />
      </Switch>
    </Router>
  );
}
