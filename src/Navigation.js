import React from "react";

import { HashRouter as Router, Route, Link } from "react-router-dom";

import App from "./App";
import App1 from "./App1";
import css from "./App.css";
import { withStyles } from "@material-ui/core/styles";
import HomePage from "./HomePage";
import Appointments from "./Appointments";
import DocumentsAppointments from "./DocumentsAppointmentList";
import UpcomingAppointmentsListTabel from "./UpcomingAppointmentsListTabel";
import UpcomingAppointmentsList from "./UpcomingAppointmentsList";
import DeleteAppointmentTable from "./DeleteAppointmentTable";
import DeleteAppointmentTableList from "./DeleteAppointmentTableList";
import AppointmentPatientList from "./AppointmentPatientList";
import Documents from "./Documents";

import ReportsHeader from "./utilities/ReportsHeader";
import ReportsDepartment from "./utilities/ReportsDepartment";
import InitialsScreen from "./initials/InitialsScreen";
import SetupTwoFactor from "./SetupTwoFactor";

import MobileVerification from "./MobileVerification";
import ForgetPassword from "./ForgetPasswordEmail";
import MeetingRoom from "./MeetingRoom";
import TelemedicineAppointments from "./TelemedicineAppointments";
import InsuranceCardMain from "./InsuranceCardMain";
import ShowAllupcomingAppointments from "./ShowAllupcomingAppointments";
import ShowAllUpcomingAppointmentListDetail from "./ShowAllUpcomingAppointmentListDetail";
import ShowAllUpcomingAppointmentListView from "./ShowAllUpcomingAppointmentListView";
import ProvideIDCard from "./ProvideIDCard";
import ProvideInsuranceCard from "./ProvideInsuranceCard";
import ShowAllConsent from "./ShowAllConsent";
import Consentpdf from "./Consentpdf";
import SurveyData from "./SurveyData";
import SurveyScore from "./SurveyScore";
import MedicationData from "./MedicationData";
import MedicalHistory from "./MedicalHistory";
import EmailTemplateDetail from "./EmailTemplateDetail";
import NewPatientForm from "./NewPatientForm";
import AppointmentPatientListTabelComponent from "./AppointmentPatientListTabelComponent";
import ShowAllConsentDocuments from "./ShowAllConsentDocuments";
import ShowAllConsentDocumentsPDF from "./ShowAllConsentDocumentsPDF";

import ProvideIDCardDocuments from "./ProvideIDCardDocuments";
import ProvideInsuranceCardDocuments from "./ProvideInsuranceCardDocuments";
import PROsTrendAnalysis from "./PROsTrendAnalysis";
import PhysicianCareTeam from "./PhysicianCareTeam";








function Navigation() {
  return (
    <Router basename={"/ProskAdmin"}>
      <Route exact path="/" component={App1} />
      <Route exact path="/MobileVerification/" component={MobileVerification} />
      <Route exact path="/home/" component={HomePage} />
      <Route exact path="/1" component={App} />
      <Route exact path="/PROsTrendAnalysis" component={PROsTrendAnalysis} />
      <Route exact path="/App.css" component={css} />
      <Route exact path="/ProvideIDCardDocuments" component={ProvideIDCardDocuments} />
      <Route exact path="/ProvideInsuranceCardDocuments" component={ProvideInsuranceCardDocuments} />
      <Route exact path="/ShowAllConsentDocuments" component={ShowAllConsentDocuments} />
      <Route exact path="/ShowAllConsentDocumentsPDF" component={ShowAllConsentDocumentsPDF} />
      <Route exact path="/R101/" component={ReportsHeader} />
      <Route exact path="/initials/" component={InitialsScreen} />
      <Route exact path="/SetupTwoFactor" component={SetupTwoFactor} />
      <Route exact path="/ResetPassword" component={ForgetPassword} />
      <Route exact path="/ReportsDepartment" component={ReportsDepartment} />
      <Route exact path="/Appointments" component={Appointments} />
      <Route exact path="/DocumentsAppointmentList" component={DocumentsAppointments} />
      <Route exact path="/MeetingRoom" component={MeetingRoom} />
      <Route exact path="/PhysicianCareTeam" component={PhysicianCareTeam} />
      <Route exact path="/Documents" component={Documents} />
      <Route exact path="/UpcomingAppointmentsListTabel" component={UpcomingAppointmentsListTabel} />
      <Route exact path="/UpcomingAppointmentsList" component={UpcomingAppointmentsList} />
      <Route exact path="/TelemedicineAppointments" component={TelemedicineAppointments} />
      <Route exact path="/AppointmentPatientList" component={AppointmentPatientList} />
      <Route exact path="/AppointmentPatientListTabelComponent" component={AppointmentPatientListTabelComponent} />
      <Route exact path="/InsuranceCardMain" component={InsuranceCardMain} />
      <Route exact path="/ShowAllUpcomingAppointmentListDetail" component={ShowAllUpcomingAppointmentListDetail} />
      <Route exact path="/ShowAllupcomingAppointments" component={ShowAllupcomingAppointments} />
      <Route exact path="/ShowAllUpcomingAppointmentListView" component={ShowAllUpcomingAppointmentListView} />
      <Route exact path="/ProvideIDCard" component={ProvideIDCard} />
      <Route exact path="/ProvideInsuranceCard" component={ProvideInsuranceCard} />
      <Route exact path="/ShowAllConsent" component={ShowAllConsent} />
      <Route exact path="/Consentpdf" component={Consentpdf} />
      <Route exact path="/SurveyData" component={SurveyData} />
      <Route exact path="/MedicationData" component={MedicationData} />
      <Route exact path="/SurveyScore" component={SurveyScore} />
      <Route exact path="/MedicalHistory" component={MedicalHistory} />
      <Route exact path="/EmailTemplateDetail" component={EmailTemplateDetail} />
      <Route exact path="/NewPatientForm" component={NewPatientForm} />
      <Route exact path="/DeleteAppointmentTable" component={DeleteAppointmentTable} />
      <Route exact path="/DeleteAppointmentTableList" component={DeleteAppointmentTableList} />
    </Router>
  );
}
export default Navigation;
