import React,{useEffect,Suspense,useState,Fragment} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import av from "./images/1.jpg";
import { useMeasure } from "react-use";
import Medicine from "./images/graph.png";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import prosk from "./images/Logo-02.png";
import loader from "./images/loder.gif";
import LockIcon from '@material-ui/icons/Lock';
import AppointmentsPage from "./Appointments";
import PrimaryAppBar from "./PrimaryAppBar";
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Grid, Card,
  CardHeader,
  Button,
  Icon,
  Avatar,
  CardContent,
 
  Link,
  ListItemAvatar,
  ListItemSecondaryAction,XGrid  } from "@material-ui/core";
import Profile from "./homepage/Profile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SalesContract from "./homepage/SalesContract";

import Chart from "react-google-charts";
import CostSheet from "./homepage/CostSheet";
import PackingList from "./homepage/PackingList";
import DeliveryOrder from "./homepage/DeliveryOrder";
import Invoice from "./homepage/Invoice";


import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import { setDate } from 'date-fns';
const drawerWidth = 283;
var ScoreData = [];
const useStyles = makeStyles((theme) => ({
 

}));

const SetRoute = ({ name, setValue, ...rest }) => {
  setValue(name);
  return <Route {...rest} />;
};

function Appointments(event){
  window.location = "#/ProskAdmin/Appointments";
  }
  function TelemedicineSessions(event){
    window.location = "#/ProskAdmin/TelemedicineAppointments";
    }
    function Documents(event){
      window.location = "#/Documents";
      }
      function UpcomingAppointments(event){
        window.location = "#/ProskAdmin/ShowAllupcomingAppointments";
        }
        function EmailTemplate(event){
          window.location = "#/ProskAdmin/EmailTemplateDetail";
          }
          function CreateNewPatient(event){
            window.location = "#/ProskAdmin/NewPatientForm";
            }
            function DeleteAppointment(event){
              window.location = "#/ProskAdmin/DeleteAppointmentTable";
              }
              
              
              function NestedList(props) {
                const classes = useStyles();
                const [open, setOpen] = React.useState(false);
                const [dashboard, setOpenDashboard] = React.useState(false);
              
                function handleClick() {
                  setOpen(!open);
                }
              
                function handleClickDashboard() {
                  setOpenDashboard(!dashboard);
                }
                const menu1 = [
                  { label: "Home", short_label: "F04", action: "#/ProskAdmin/home/" ,icon:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" },
                  { label: "Send Invitation", short_label: "F04", action: "#/ProskAdmin/Appointments", icon:"M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z" },
                  // { label: "Telemedicine Sessions", short_label: "F04", action: "/" },
                  { label: "Documents", short_label: "F04", action: "#/ProskAdmin/DocumentsAppointmentList/",icon:"M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"  },
                  // { label: "Upcoming Appointments", short_label: "F04", action: "/" },
                  // { label: "Email Template", short_label: "F04", action: "/" },
                  // { label: "Email Template", short_label: "F04", action: "/" },
                  // { label: " Create New Patient", short_label: "F04", action: "#/ProskAdmin/NewPatientForm" },
                  // { label: " Delete Appointment", short_label: "F04", action: "/" },
              
                 // { label: "Student List", short_label: "R101", action: "#/R101" }
                ];
              
                localStorage.setItem("features", JSON.stringify(menu1));
                const menu = JSON.parse(localStorage.getItem("features"));
                function openAction(props, action) {
                  props.handleDrawerClose();
                  window.location = action;
                }
              
                
              
                const items = menu.map(item => (
                  <ListItem
                    button
                    onClick={event => openAction(props, item.action)}
                    style={{padding:"11px"}}
                  >
                    <ListItemIcon>
                    <SvgIcon>
                        <path d={item.icon}  />
                      </SvgIcon>
                      </ListItemIcon>
                    <ListItemText primary={
                      <Typography color="Primary"> 
                      {item.label}
                    </Typography> 
                    } style={{marginLeft:"-19%"}}/> 
                  </ListItem>
                ));
              
                return (
                  <div>
                    <List
                      //subheader={Menu}
                      className={classes.drawerMenu}
                    >
                      <List component="div">{items}</List>
                    </List>
                  </div>
                );
              }

export default function HomePage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [graphData, SetGraphData] = React.useState(null);
  const [graphData2, SetGraphData2] = React.useState(null);
  const [graphData3, SetGraphData3] = React.useState(null);
  const [graphData4, SetGraphData4] = React.useState(null);
  const [isloader, SetLoader] = React.useState(null);
  const [viewValue, setViewValue] = useState(props.match.params.value || "");
  const MobileGetScoreData =()=> {
    let url =localStorage.getItem('url') + "/ProskAdmin/DashboardGetSurveyGraphDataJSONList";
    // console.log(url);
    
    fetch(url, {
      method: "POST",
      //  body: dataTomcat,
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        //ScoreData = result["score"];
        // console.log("ABC==>", JSON.parse('['+result["score"]["SurveyGraphData"].replace(/'/g, '"')+']'));
        console.log("lmno==>", JSON.parse('['+result["score"]["PatientBarChartData"].replace(/'/g, '"')+']'));
         SetGraphData(JSON.parse('['+result["score"]["SurveyGraphData"].replace(/'/g, '"')+']'));
          SetGraphData2(JSON.parse('['+result["score"]["PatientBarChartData"].replace(/'/g, '"')+']'));
          SetGraphData3(JSON.parse('['+result["score"]["LoginLineChartData"].replace(/'/g, '"')+']'));
          SetGraphData4(JSON.parse('['+result["score"]["AppointmentBarChartData"].replace(/'/g, '"')+']'));
      })
      .catch((error) =>alert('error'),
      );
  }
  const GetColumns = () => {
    let url;
    console.log("no select");
     url =
    localStorage.getItem("url") +
    "/ProskAdmin/GetViewAppointmentColumnList?user_id=" +
    localStorage.getItem("User_ID") +
    "&table_id=1"
  console.log(url);
  fetch(url, {
    method: "POST",
    // body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      console.log("lmno==>",result["DATA"]);
      sessionStorage.setItem("data2",JSON.stringify(result['DATA']));
    })
    .catch((error) =>alert('error'),
    );
  }

  const GetColumns2 = () => {
    let url;
    console.log("no select");
     url =
    localStorage.getItem("url") +
    "/ProskAdmin/GetViewAppointmentColumnList?user_id=" +
    localStorage.getItem("User_ID") +
    "&table_id=2"
  console.log(url);
  fetch(url, {
    method: "POST",
    // body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((result) => {
      console.log(result);
      console.log("lmno==>",result["DATA"]);
      sessionStorage.setItem("data",JSON.stringify(result['DATA']));
    })
    .catch((error) =>alert('error'),
    );
  }
 
  const [containerRef, { width: containerWidth }] = useMeasure();
  const data = [
    { name: "9 Feb", uv: 96, },
    { name: "8 March", uv: 86, },
    { name: "10 April", uv: 75, },
    { name: "11 May", uv: 55.6, },
    { name: "22 Jun", uv: 45.3,  },
    { name: "27 July", uv: 33.3,  },
    { name: "7 Aug", uv: 12.4,  }
  ];
  useEffect(() => {
    // console.log('mount it!');
    if(localStorage.getItem("User_ID")==null){
      // console.log("aqib")
      window.location = "#/";
    }else{
      localStorage.setItem("fromdate", "");
      localStorage.setItem("todate", "");
      GetColumns();
      GetColumns2();
      MobileGetScoreData();
    }
}, []);
  
  return (
    
    <div className={classes.root} style={{backgroundColor:window.innerWidth>786?"white":"white"}}>

      <CssBaseline />

      <PrimaryAppBar  />

        <Grid 
container
style={{ marginTop: "80px",backgroundColor:window.innerHeight>786?"white":"white"}}
direction="row"
justify="center"
alignItems="center"
>
          {graphData==null?<div style={{backgroundColor:"white"}}>
            <Grid item xs={12} sm={12} container style={{backgroundColor:window.innerHeight>786?"white":"white"}}>
            <img src={loader} style={{height: window.innerWidth > 768 ? '550px' : '550px',display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"auto",marginBottom:"auto"}} />
            </Grid>
          </div>:          
          <Grid item xs={12} sm={12} container style={{backgroundColor:"white"}}>
              <Grid item xs={12} sm={5}>
              <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        style={{ textAlign: "left",fontSize:"15px",marginTop:"10px", fontFamily: "Arial",fontWeight:"bold",marginLeft:"18%" }}
                      >
                        Problem Area
          </Typography>
                {!!graphData &&
                
                  <Chart
                    width={'500'}
                    height={'349px'}
                    chartType="PieChart"
                    loader={<div style={{textAlign:"center"}}></div>}
                    data={graphData}
                    options={{
                      title: '',
                      sliceVisibilityThreshold: 0, // 20%
                      width:"auto"
                    }}
                    rootProps={{ 'data-testid': '7' }}
                  />
                }
                <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        style={{ textAlign: "left",fontSize:"15px",marginTop:"10px", fontFamily: "Arial",fontWeight:"bold",marginLeft:"18%" }}
                      >
                        Physician Appointments
          </Typography>
                {!!graphData4 &&
                  <Chart
                  width={'500'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div  style={{textAlign:"center"}}></div>}
                  data={graphData4}
                  options={{
                    title: '',
                    sliceVisibilityThreshold: 0, // 20%
                    width:"auto"
                  }}
                  rootProps={{ 'data-testid': '7' }}
                />
                }
              </Grid>
                <Grid item xs={12} sm={6} style={{marginTop:"8px"}}>
                <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        style={{ textAlign: "left",fontSize:"15px",marginTop:"1px", fontFamily: "Arial",fontWeight:"bold",marginLeft:window.innerWidth>786?"1%":"20%" }}
                      >
                       Monthly Appointments
          </Typography>
                {!!graphData2 &&
                    <Chart
                    width={'500'}
                    height={'300px'}
                    style={{marginLeft:"31px",marginTop:"54px"}}
                    chartType="Bar"
                    loader={<div  style={{textAlign:"center"}}></div>}
                      data={graphData2}
                    options={{
                      title: '',
                      legend: { position: 'right' },
                      width:"auto"
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                  }
                <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        style={{ textAlign: "left",fontSize:"15px",marginTop:"8px", fontFamily: "Arial",fontWeight:"bold",marginLeft:window.innerWidth>786?"1%":"20%" }}
                      >
                        No. of Logins
                </Typography>
                {!!graphData3 &&
                    <Chart
                    width={'500'}
                    height={'300px'}
                    chartType="LineChart"
                    loader={<div  style={{textAlign:"center"}}></div>}
                    data={graphData3}
                    options={{
                      title: '',
                      legend: { position: 'right' },
                      width:"auto"
                    }}
                    rootProps={{ 'data-testid': '41' }}
                  />
                  }


                </Grid>

</Grid>}

        </Grid>
    </div>
  );
}