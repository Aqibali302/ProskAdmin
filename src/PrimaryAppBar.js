import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import clsx from 'clsx';
import logo1 from "./logo1.png";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Info from "@material-ui/icons/Info";
import Dashboard from "@material-ui/icons/Dashboard";
import Input from "@material-ui/icons/Input";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classNames from "classnames";
import SettingsIcon from "@material-ui/icons/Settings";
import LockIcon from "@material-ui/icons/Lock";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import prosk from "./images/Logo-02.png";
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import {
  Drawer,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  Collapse,
  TextField,Card,Link,CardContent
} from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline',
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  bigAvatar: {
    margin: 10
  },
  
  inline: {
    display: "inline"
  },
  title: {
    display: "none",
  },
  leftIcon: {

  },
  rightIcon: {

  },
  iconSmall: {
    fontSize: 10
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  
  iconSmall: {
    fontSize: 20
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function NestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  function handleClick() {
    setOpen(!open);
  }

  
  const menu1 = [
    { label: "Home", short_label: "F04", action: "#/ProskAdmin/home/" ,icon:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" ,fill:"black" },
    { label: "Send Invitation", short_label: "F04", action: "#/ProskAdmin/Appointments", icon:"M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z",fill:"black" },
    // { label: "Telemedicine Sessions", short_label: "F04", action: "/" },
    { label: "Documents", short_label: "F04", action: "#/ProskAdmin/AppointmentPatientList/",icon:"M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z",fill:"black"  },
      { label: "Upcoming Appointments", short_label: "F04", action: "#/ProskAdmin/UpcomingAppointmentsList",icon:"M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z",fill:"black" },
     { label: "Email Template", short_label: "F04", action: "#/ProskAdmin/EmailTemplateDetail",icon:"M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z",fill:"black" },
     //{ label: " Create New Patient", short_label: "F04", action: "#/ProskAdmin/NewPatientForm" },
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
          <path d={item.icon} fill={item.fill}  />
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
function PrimaryAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openDailog, setOpenDilog] = React.useState(false);
  function home() {
    window.location = "#home";
  }
  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handlelogout(props) {
    localStorage.setItem("features", null);
    window.location = "/WaveEdu/app";
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const handleMenu = (event) => {
   localStorage.clear();
   sessionStorage.clear();
    window.location = "#/";
  };
  const CreateUser = (event) => {
    window.location = "#/";
  };
  
  const ChangePassword = () => {
    setOpenDilog(true);
  };
 
  const handleClose = () => {
    setOpenDilog(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  return (
    <div>
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
          
           <img src={prosk} width={80} height={30} />
            <div className={classes.grow} />
           <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
             {props.header_text}
          </Typography>
           <div className={classes.grow} />
           
          <div className={classes.sectionDesktop}>
          {/* <IconButton color="inherit" onClick={ CreateUser}>
                <PeopleIcon /> <Typography
              color="inherit"
              noWrap
              
            >
              Create User
            </Typography>
              </IconButton> */}
          {/* <IconButton color="inherit" onClick={ChangePassword}>
                <LockIcon /> <Typography
              color="inherit"
              noWrap
              
            >
              Change Password
            </Typography>
              </IconButton> */}
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
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div style={{marginTop:"10px"}} >
        <Typography variant="caption" style={{paddingLeft:"10px",color:"black"}}>Hi,Admin</Typography>
        <Icon color="inherit" style={{float:"right",height:"30px",fontSize:"7px",marginRight:"12px"}}>
                <ArrowBackIosIcon onClick={handleDrawerClose} size={10}/> 
              </Icon>
        </div>
        <Card>
      <CardContent
        style={{ display: "block", height: window.innerWidth > 768 ? '1600px' : '1200px', }}
      >
        {/* <Typography variant="caption" style={{fontWeight:"bold",color:"#15428b",fontFamily:"tahoma,arial,verdana,sans-serif"}}>Modules</Typography> */}
        <Divider variant="fullWidth" />
        <div style={{  marginTop: "5px" }}>
          <NestedList handleDrawerClose={handleDrawerClose} />
          
        </div>
        <br />
      </CardContent>
    </Card>

      </Drawer>
      <div>

      {/* <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openDailog}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change Password
        </DialogTitle>
        <DialogContent dividers>
        <TextField
                  id="old_password"
                  name="old_password"
                  label="Current Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  style={{ width: 550,marginTop:"-10px" }}
                  // value={this.state.password}
                  // onChange={this.password}
                />
          <TextField
                  id="new_password"
                  name="new_password"
                  label="New Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  style={{ width: 550 }}
                  // value={this.state.password}
                  // onChange={this.password}
                />
          <TextField
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirm Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  style={{ width: 550 }}
                  // value={this.state.password}
                  // onChange={this.password}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> */}
    </div>
    </div>
    
  );
}
export default PrimaryAppBar;
