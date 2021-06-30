import React,{useEffect} from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import clsx from 'clsx';
import {
  Grid,
  IconButton,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  Button
} from "@material-ui/core";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PDFIcon from "mdi-material-ui/FilePdf";
import FilterIcon from "mdi-material-ui/FilterOutline";
import ExcelIcon from "mdi-material-ui/GoogleSpreadsheet";
import SearchIcon from "mdi-material-ui/FileSearchOutline";
import SearchBoxIcon from "@material-ui/icons/Search";
import PrimaryAppBar from "./PrimaryAppBar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'

import MoreIcon from "@material-ui/icons/MoreVert";

import AppointmentsFilters from "./AppointmentsFilters";
import UpcomingAppointmentsListTabel from "./UpcomingAppointmentsListTabel";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import * as moment from "moment";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
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
  },

  sectionDesktop: {
    display: "none",
  },
  sectionMobile: {
    display: "flex",
  },
  bigAvatar: {
    margin: 10
  },
  badgeMargin: {
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

function UpcomingAppointmentsList() {
  const classes = useStyles();
  const [showFilter, setFilter] = React.useState(false);
  const [showTableFilter, setTableFilter] = React.useState(false);
  const [showFilterTabel, setFilterTableDate] = React.useState(false);
  const [showFilterDate, setFilterDate] = React.useState(true);


  const anchorEl = React.useRef(null);
  const anchorE2 = React.useRef(null);
  

  function handleTableFilter() {
    setTableFilter(!showTableFilter);
  }
  function handleFilter() {
    setFilter(!showFilter);
  }
  function handleFilterDate() {
    setFilterTableDate(!showFilterTabel);
  }
  function handleTableFilterDate() {
    setFilterDate(!showFilterDate);
  }

  function backbutton (){
    window.location = "#/ProskAdmin/home/";
  };
  useEffect(() => {
    if(localStorage.getItem("User_ID")==null){
      window.location = "#/";
    }
}, []);
  return (
    <div className={classes.root}>
      <PrimaryAppBar header_text={"Upcoming Appointments"} />
      <div style={{ marginTop: "100px" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>
              <IconButton onClick={backbutton}>
                  <ArrowBackIcon fontSize="small" />
                  <Typography
                    color="inherit"
                    noWrap
                  >
                    Back
                </Typography>
                </IconButton>
                <IconButton style={{ marginLeft: "-10px" }}>
                </IconButton>
              </td>
              <td style={{ textAlign: "right", width: "30%" }}>
              {/* <IconButton
                  style={{ marginLeft: "-10px" }}
                  onClick={handleTableColumnFilter}
                  buttonRef={anchorE2}
                   color="primary"
                >
                  <VisibilityOffIcon fontSize="small" />
                </IconButton> */}
              <IconButton
                  style={{ marginRight: "1px" }}
                  onClick={handleTableFilterDate}
                  buttonRef={anchorEl}
                   color="primary"
                >
                  <CalendarTodayIcon fontSize="small" />
                </IconButton>
                <IconButton
                  style={{ marginLeft: "-10px" }}
                  onClick={handleTableFilter}
                  buttonRef={anchorE2}
                  color="primary"
                >
                  <FilterIcon fontSize="small" />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <UpcomingAppointmentsListTabel
          showFilter={showTableFilter}
          showFilterTabel={showFilterDate}
        style={{ marginTop: "-20px",}}
        
      />
    </div>
  );
  }
export default UpcomingAppointmentsList;
