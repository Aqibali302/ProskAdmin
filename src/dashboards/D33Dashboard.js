import React from "react";
import {
  Grid,
  Card,
  CardHeader,
  Typography,
  Avatar,
  Stepper,
  Step,
  StepButton
} from "@material-ui/core";

import AccountOpeningIcon from "../images/699313-icon-42-note-add-512.png";
import CashReceiptsIcon from "../images/cash-in-hand.png";
import GeneralLedgerIcon from "../images/cbr-financial-reporting-icon-01.png";
import ChartofAccountsIcon from "../images/021_120_layout_wireframe_grid_sitemap_structure_list_thread_2-512.png";
import CashPaymentsIcon from "../images/hand_cash_give_receive_money_payment_shop-512.png";
import GeneralJournalIcon from "../images/reports-icon.png";
import JournalVoucherIcon from "../images/icon_order-entry.png";
import BankReceiptsIcon from "../images/icon-home-direct-to-bank.png";
import TrialBalanceIcon from "../images/117980_math_512x512.png";
import RevenueCollectionIcon from "../images/380-3801594_once-we-have-created-steady-revenue-streams-and.png";
import BankPaymentsIcon from "../images/Cheque128px.png"; //Cheque128px.png
import StudentLedgerIcon from "../images/report_0.png";

import { makeStyles, withStyles } from "@material-ui/styles";
import PrimaryAppBar from "../PrimaryAppBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  bigAvatar: {
    margin: 10
  },
  inline: {
    display: "inline"
  },
  iconSmall: {
    fontSize: 20
  },
  card: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"
  }
}));

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  bigAvatar: {
    margin: 10
  },

  inline: {
    display: "inline"
  },
  card: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"
  }
}));
function getSteps() {
  return ["Accounts", "Transactions", "Ledgers"];
}

function ActionTile(props) {
  return (
    <Card
      className={classes.card}
      style={{
        margin: "0px 10px 10px 10px",
        cursor: "pointer",
        height: "100px"
      }}
      onClick={event => (window.location = props.form)}
    >
      <CardHeader
        title={<Typography color="primary">{props.title}</Typography>}
        subheader={props.subtitle}
        avatar={<Avatar className={classes.bigAvatar} src={props.icon} />}
      />
    </Card>
  );
}
function D22Dashboard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const classes = useStyles();
  function totalSteps() {
    return steps.length;
  }

  function completedSteps() {
    return Object.keys(completed).length;
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps();
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  }

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <PrimaryAppBar header_text={"University College Lahore"} />
      <div style={{ marginTop: "80px" }}>
        <Grid container>
          <Grid item sm={3}></Grid>
          <Grid item xs={12} sm={12}>
            <Stepper nonLinear orientation="horizontal">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton onClick={handleStep(index)} active={true}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Grid>
          <Grid item sm={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} container style={{ alignItems: "center" }}>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F27Form/0"
                view="#F27Form"
                title="Account Opening"
                subtitle="Define and categorise accounts in Assets, Liabilities, Capital, Revenue and Expenses"
                icon={AccountOpeningIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F30Form/0"
                view="#F21Reports"
                title="Cash Receipts"
                subtitle="Cash and petty cash inflows other than fee revenue"
                icon={CashReceiptsIcon}
                introduction=""
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#R29Reports"
                view="#F18Reports"
                title="General Ledger"
                subtitle="Monitor transaction activity of all types for the period"
                icon={GeneralLedgerIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#R28Reports"
                view="#R28Reports"
                title="Chart of Accounts"
                subtitle="List of accounts categorised in four levels"
                icon={ChartofAccountsIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F32Form/0"
                view="#F21Reports"
                title="Cash Payments"
                subtitle="Cash outflows and petty expenses"
                icon={CashPaymentsIcon}
                introduction=""
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#R36Reports"
                view="#R36Reports"
                title="General Journal"
                subtitle="Define fee structure for each degree program in the session"
                icon={GeneralJournalIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F35Form/0"
                view="#F16Reports"
                title="Journal Voucher"
                subtitle="Excpetional and adjusting transactions"
                icon={JournalVoucherIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F33Form/0"
                view="#F21Reports"
                title="Bank Receipts"
                subtitle="Bank inflows other than regular fee revenue"
                icon={BankReceiptsIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#R31Reports"
                view="#R31Reports"
                title="Trial Balance"
                subtitle="Standard accounting trial balance for any level"
                icon={TrialBalanceIcon}
                introduction=""
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F03Form/0"
                view="#F03Reports"
                title="Revenue Collection"
                subtitle="Manage control accounts that integrate with fee management"
                icon={RevenueCollectionIcon}
                introduction=""
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F34Form/0"
                view="#F15Reports"
                title="Bank Payments"
                subtitle="Bank outflows and supplier payments, excluding payroll"
                icon={BankPaymentsIcon}
                introduction=""
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <ActionTile
                form="#F12Reports"
                view="#F12Reports"
                title="Student Ledger"
                subtitle="Accounts ledger of students"
                icon={StudentLedgerIcon}
                introduction=""
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default D22Dashboard;
import React,{useEffect,Suspense,useState} from 'react';
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
import { useRechartToPng } from "recharts-to-png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import prosk from "./images/Logo-02.png";
import LockIcon from '@material-ui/icons/Lock';
import AppointmentsPage from "./Appointments";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Grid, Card,
  CardHeader,
  Button,
  Icon,
  Avatar,
  CardContent,
 
  Link,
  ListItemAvatar,
  ListItemSecondaryAction  } from "@material-ui/core";
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
const drawerWidth = 240;
var ScoreData = [];
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  grow: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const SetRoute = ({ name, setValue, ...rest }) => {
  setValue(name);
  return <Route {...rest} />;
};

function Appointments(event){
  window.location = "#/Prosk/Appointments";
  }
  function TelemedicineSessions(event){
    window.location = "#/Prosk/TelemedicineAppointments";
    }
    function Documents(event){
      window.location = "#/Documents";
      }
      function UpcomingAppointments(event){
        window.location = "#/Prosk/ShowAllupcomingAppointments";
        }
        function EmailTemplate(event){
          window.location = "#/Prosk/EmailTemplateDetail";
          }
          function CreateNewPatient(event){
            window.location = "#/Prosk/NewPatientForm";
            }
            function DeleteAppointment(event){
              window.location = "#/Prosk/DeleteAppointmentTable";
              }
              
              
// componentDidMount=()=> {

//     MobileGetScoreData();
//   }
export default function HomePage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [graphData, SetGraphData] = React.useState(null);
  const [graphData2, SetGraphData2] = React.useState(null);
  const [graphData3, SetGraphData3] = React.useState(null);
  const [graphData4, SetGraphData4] = React.useState(null);
  const [viewValue, setViewValue] = useState(props.match.params.value || "");
  const MobileGetScoreData =()=> {
    let url =localStorage.getItem('url') + "/DashboardGetSurveyGraphDataJSONList";
    console.log(url);
    
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
        console.log(result);
        //ScoreData = result["score"];
        console.log("ABC==>", JSON.parse('['+result["score"]["SurveyGraphData"].replace(/'/g, '"')+']'));
         console.log("lmno==>", JSON.parse('['+result["score"]["PatientBarChartData"].replace(/'/g, '"')+']'));
         SetGraphData(JSON.parse('['+result["score"]["SurveyGraphData"].replace(/'/g, '"')+']'));
          SetGraphData2(JSON.parse('['+result["score"]["PatientBarChartData"].replace(/'/g, '"')+']'));
          SetGraphData3(JSON.parse('['+result["score"]["LoginLineChartData"].replace(/'/g, '"')+']'));
          SetGraphData4(JSON.parse('['+result["score"]["AppointmentBarChartData"].replace(/'/g, '"')+']'));
      })
      .catch((error) =>
        alert('error'),
      );
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    window.location = "#/";
  };
  const CreateUser = (event) => {
    window.location = "#/";
  };
  const ChangePassword = (event) => {
    window.location = "#/";
  };
  const handleValueChange = (value) => {
    setViewValue(value);
  };
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
    console.log('mount it!');
    MobileGetScoreData();
}, []);
  
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap>
            Prosk
          </Typography> */}
           <img src={prosk} width={80} height={30} />
           <div className={classes.grow} />
           {/* <Typography variant="h6" noWrap>
            Prosk
          </Typography> */}
          <div className={classes.grow} />
          <div>
          <IconButton color="inherit" onClick={ CreateUser}>
                <PeopleIcon /> <Typography
              color="inherit"
              noWrap
              
            >
              Create User
            </Typography>
              </IconButton>
          <IconButton color="inherit" onClick={ChangePassword}>
                <LockIcon /> <Typography
              color="inherit"
              noWrap
              
            >
              Change Password
            </Typography>
              </IconButton>
              <IconButton color="inherit" onClick={handleMenu}>
                <ExitToAppIcon /> <Typography
              color="inherit"
              noWrap
              
            >
              Logout
            </Typography>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
   
   open={open}
   className={classes.drawer}
   variant="persistent"
   anchor="left"
   classes={{
     paper: classes.drawerPaper,
   }}
 >
   <Toolbar />
   <div className={classes.drawerContainer}>
          <div>
          
                <div  className={classes.menuListContainer}>
                  <Typography className={classes.menuTitle} noWrap variant="h6">
                    <div>haseeb</div>
                  </Typography>
                  <MenuList
                    style={{
                      outline: "none",
                    }}
                  >
                   
                        <MenuItem
                         
                          className={`${classes.menuItemPadding}`}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            to="Appoinments"
                          >
                            <Typography
                              className={`${classes.menuItemText} ${
                                viewValue === `` &&
                                classes.active
                              }`}
                              noWrap
                              variant="body2"
                            >
                           haseeb
                            </Typography>
                          </Link>
                        </MenuItem>
                     
                  </MenuList>
                </div>
          </div>
          <div
            style={{
              maxWidth: drawerWidth - 15,
              paddingBottom: 10,
              paddingTop: 20,
            }}
          >
            <Typography
              variant="body2"
              style={{ fontSize: 12, color: "white" }}
              align="center"
            >
              Copyright © {new Date().getFullYear()}. University College Lahore
              <br></br>(UCL), Pakistan - All Rights Reserved
            </Typography>
          </div>
        </div>
        <div style={{marginTop:"10px"}} >
        <Typography variant="caption" style={{paddingLeft:"10px",color:"black"}}>Hi,Admin</Typography>
        
          <IconButton onClick={handleDrawerClose} style={{float:"right",marginTop:"-15px"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Card>
      <CardContent
        style={{ display: "block", height: "650px", }}
      >
        <Typography variant="caption" style={{fontWeight:"bold",color:"#15428b",fontFamily:"tahoma,arial,verdana,sans-serif"}}>Modules</Typography>
        <Divider variant="fullWidth" />
        <div style={{  marginTop: "5px" }}>
          <Link  
          to="/Prosk/Appointments"
          >
             <IconButton aria-label="New" >
              <PersonIcon />
            </IconButton>  
            Appointments
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={TelemedicineSessions} >
          <IconButton aria-label="New" >
              <LocalHospitalIcon />
            </IconButton>
          Telemedicine Sessions
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={Documents}>
          <IconButton aria-label="New" >
              <DescriptionIcon />
            </IconButton>
            Documents
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={UpcomingAppointments}>
          <IconButton aria-label="New" >
              <PeopleIcon />
            </IconButton>
            Upcoming Appointments
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={ EmailTemplate}>
          <IconButton aria-label="New" >
              <AlternateEmailIcon />
            </IconButton>
            Email Template
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={CreateNewPatient}>
          <IconButton aria-label="New" >
              <CreateNewFolderIcon />
            </IconButton>
            Create New Patient
          </Link>
          <br />
          <Link className={`${classes.handCursor} ${classes.linkBody1}`}  onClick={DeleteAppointment}>
          <IconButton aria-label="New" >
              <DeleteIcon />
            </IconButton>
            Delete Appointment
          </Link>
          <br />
          
        </div>
        <br />
      </CardContent>
    </Card>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <SetRoute
                setValue={(value) => handleValueChange(value)}
                name="Appoinments"
                exact
                path="/Prosk/Appointments"
                component={AppointmentsPage}
                
              />
            
            </Switch>
          </Suspense>
        </Router>
        <Grid container style={{backgroundColor:"white"}}>
          
          <Grid item xs={12} sm={12} container>
            
            <Grid item xs={12} sm={5}>
              {!!graphData &&
                <Chart
                  width={'500'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={graphData}
                  options={{
                    title: 'Survey Score',
                    sliceVisibilityThreshold: 0, // 20%
                  }}
                  rootProps={{ 'data-testid': '7' }}
                />
              }
               {!!graphData4 &&
                <Chart
                width={'500'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={graphData4}
                options={{
                  title: 'No of Appointments',
                  sliceVisibilityThreshold: 0.2, // 20%
                }}
                rootProps={{ 'data-testid': '7' }}
              />
              }


            </Grid>
            <Grid item xs={12} sm={6} style={{marginTop:"5px"}}>
            {!!graphData2 &&
                <Chart
                width={'500'}
                height={'300px'}
                style={{marginLeft:"31px"}}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                   data={graphData2}
                options={{
                  title: '',
                  legend: { position: 'top' },
                  width:"50px"

                }}
                
                rootProps={{ 'data-testid': '2' }}
              />
              }

{!!graphData3 &&
                <Chart
                width={'500'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={graphData3}
                options={{
                  title: '',
                  legend: { position: 'top' },
                  width:510
                }}
                rootProps={{ 'data-testid': '41' }}
              />
              }
            

            </Grid>

          </Grid>
        </Grid>
      </main>
    </div>
  );
}