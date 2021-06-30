/* eslint-disable react/prop-types */

import React, { Fragment, useState, Suspense, useEffect } from "react";
import clsx from "clsx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../assets/Images/logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 283;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuTitle: {
    backgroundColor: "#103C6E",
    fontFamily: "sans-serif",
    display: "flex",
    cursor: "default",
    fontSize: 16,
    fontWeight: 600,
    padding: 5,
    marginTop: 15,
  },
  menuItemPadding: {
    padding: "0 !important",
    cursor: "pointer",
  },
  menuTitleIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
    marginLeft: 15,
  },
  menuItemText: {
    textAlign: "left",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 25,
    color: "white",
    width: drawerWidth - 70,
    textOverflow: "clip",
    whiteSpace: "break-spaces",
  },
  active: {
    backgroundColor: "#103C6E",
    paddingTop: 5,
    paddingBottom: 5,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth - 10,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#F5F5F5",
    backgroundColor: "#174A84",
  },
  drawerContainer: {
    overflow: "auto",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  regular: {
    minHeight: 0,
  },
  menuListContainer: {
    borderLeft: "3px solid",
  },
}));

const SetRoute = ({ name, setValue, ...rest }) => {
  setValue(name);
  return <Route {...rest} />;
};

const NoFound = () => {
  return <Redirect to="/dashboard" />;
};
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
const Dashboard = (props) => {
  const classes = useStyles();
  const [viewValue, setViewValue] = useState(props.match.params.value || "");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const adminData = localStorage.getItem("adminData")
    ? JSON.parse(localStorage.getItem("adminData"))
    : {};
  const { featureList = [] } = adminData;

  useEffect(() => {
    const check =
      adminData.isZoomVerified === 0 &&
      adminData.userTypeId === 3 &&
      window.localStorage.getItem("isViewDialog") == 0;
    setDialogOpen(check);
  }, []);

  const handleValueChange = (value) => {
    setViewValue(value);
  };
  function handleDrawerClose() {
    setOpen(false);
  }
  const setOpenMenu = (e) => {
    e.preventDefault();
    const prevFlag = isDrawerOpen;
    setDrawerOpen(!prevFlag);
  };

  return (
    <Fragment>
      <NavBar
        setOpenMenu={(e) => setOpenMenu(e)}
        isOpenMenu={isDrawerOpen}
        logo={Logo}
        title="University College London"
        isAuthorize
        userName={adminData.displayName}
      />
      
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
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
          <NestedList handleDrawerClose={handleDrawerClose} />
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isDrawerOpen && viewValue != "home",
        })}
      >
        <div className={classes.toolbar} />
        <Router>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
             
              <SetRoute
                setValue={(value) => handleValueChange(value)}
                name="F06Form"
                exact
                path=""
                render={(props) => {
                  return (
                    <F06Form
                      {...props}
                      isDrawerOpen={isDrawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  );
                }}
              />
              <SetRoute
                setValue={(value) => handleValueChange(value)}
                name="F06Form"
                exact
                path=""
                render={(props) => {
                  return (
                    <F06Reports
                      {...props}
                      isDrawerOpen={isDrawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  );
                }}
              />
              <SetRoute
                setValue={(value) => handleValueChange(value)}
                name="F07Form"
                exact
                path=""
                render={(props) => {
                  return (
                    <F07Form
                      {...props}
                      isDrawerOpen={isDrawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  );
                }}
              />
              
              <SetRoute
                setValue={(value) => handleValueChange(value)}
                name="home"
                exact
                path="*"
                component={NoFound}
              />
            </Switch>
          </Suspense>
        </Router>
      </main>
    </Fragment>
  );
};

export default Dashboard;
