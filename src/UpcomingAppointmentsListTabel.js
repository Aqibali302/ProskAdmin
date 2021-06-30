import React from "react";

import Paper from "@material-ui/core/Paper";
import ReactOverlayLoader  from "reactjs-overlay-loader";
import * as PropTypes from "prop-types";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  ColumnChooser,
  TableColumnVisibility,
  TableColumnResizing,
  Toolbar,
  
} from "@devexpress/dx-react-grid-material-ui";
import {
  SortingState,
  IntegratedSorting,
  FilteringState,
  IntegratedFiltering,
  DataTypeProvider,
  PagingState,
  IntegratedPaging,
  
} from "@devexpress/dx-react-grid";
import {
  withStyles,
  Input,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField
} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';

import CloseIcon from '@material-ui/icons/Close';
import * as moment from "moment";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import MuiAlert from '@material-ui/lab/Alert';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CircularProgress from '@material-ui/core/CircularProgress';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const TableComponentBase = ({ classes, ...restProps }) => (
  <Table.Table
    {...restProps}
    className={classes.tableStriped}
  />
);


class UpcomingAppointmentsListTabel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      first_name:"",
      middle_name:"",
      last_name:"",
      open:false,
      show_button:false,
      setOpen:false,
      open1:false,
      setOpen1:false,
      isSavedCalled:true,
      last_name:"",
      phone:"",
      email:"",
      gender_val:"",
      CompleteAppointment:"",
      loading:true,
      user_id: localStorage.getItem("User_ID"),
      fromdate: new Date(),
      todate: new Date(),
      HiddenColumn:[],
      columns: [

        { name: "Aid", title: "Appointment#" },
        { name: "fname", title: "First Name" },
        { name: "lname", title: "Last Name" },
        { name: "doa", title: "Date of Appointment" },
        { name: "starttime", title: "Start Time" },
      // { name: "status", title: "Status" },
        { name: "Action", title: "Documents" },
       // { name: "reminder", title: "Reminder" }
      ],
      defaultColumnWidths: [  
        { columnName: "Aid", width: 250, },
        { columnName: "fname", width: 250 },
        { columnName: "lname", width: 250 },
        { columnName: "doa", width: 250 },
        { columnName: "starttime", width: 250},
        { columnName: "Action", width: 250 }, 
      ],
      defaultColumnVisibilites: ["doa", "starttime", "Action","Aid",],
      ViewColumn:JSON.parse(sessionStorage.getItem("data")),
      rows: [],
      currencyFilterOperations: [
        "equal",
        "notEqual",
        "greaterThan",
        "greaterThanOrEqual",
        "lessThan",
        "lessThanOrEqual"
      ],

    };
  }
  
  CheckListView=(AppointmentID,UserId,first_name,last_name)=>{
    localStorage.setItem("first_name",first_name);
    localStorage.setItem("last_name",last_name);
    localStorage.setItem("user_id",UserId);
      localStorage.setItem("appointment_id",AppointmentID);
        this.NavigateNextPage(); 
      
 };
 NavigateNextPage=()=>{
    window.location = "#/ProskAdmin/ShowAllUpcomingAppointmentListDetail";  
 };


  
   handleClick = () => {
     this.setState({
       open:!this.state.open
     })
  };

   handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      open:!this.state.open
    })
  };
  handleClick1 = () => {
    this.setState({
      open1:!this.state.open1
    })
 };

  handleClose1 = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }
   this.setState({
     open1:!this.state.open1
   })
 };
  AppointmentAlreadyExist() {
    this.handleClick();

}





  handleNextClick = () => {
    let url=localStorage.getItem("url") +"/alpha/MobileGetAgendaList";
    fetch(url, {
      method: "GET",
      //body: data
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(
        result => {
          this.setState({
            isSavedCalled:false
          });
          console.log(result);
          console.log(url);
          var rows=[];
          const Formitteddatofbirth = moment(this.state.date_of_birth).format(
            "MM/DD/YYYY"
          );
          var moment1 = require('moment-timezone');
          console.log(result["upcoming_appointments"].length);
            for (var i = 0; i < result["upcoming_appointments"].length; i++) {
              const first_name=result.upcoming_appointments[i]["first_name"];
              const last_name=result.upcoming_appointments[i]["last_name"];
              const start_time=result.upcoming_appointments[i]["start_time"];
              const Appointment=result.upcoming_appointments[i]["appointment_id"];
              const UserId=result.upcoming_appointments[i]["user_id"];
              const patientNumber=i;
              const Action=<Button   size="small"  style={{backgroundColor:"rgba(224, 224, 224, 1)",color:"rgba(97, 97, 97, 0.9)"}}>View</Button>;              
              
              if(result.upcoming_appointments[i]["status"]=="Partially Completed" || result.upcoming_appointments[i]["status"]=="Completed"){
                Action=<Button variant="contained" size="small" disableElevation color="primary" onClick={(event) =>this.CheckListView(Appointment,UserId,first_name,last_name)}>View</Button>;
              }
              rows.push({
                Aid:result.upcoming_appointments[i]["appointment_id"],
                fname: result.upcoming_appointments[i]["first_name"],
                lname: result.upcoming_appointments[i]["last_name"],
                status: result.upcoming_appointments[i]["status"],
                doa: moment(result.upcoming_appointments[i]["appointment_date"]).format("MM/DD/YYYY"),
                starttime: result.upcoming_appointments[i]["start_time"],
                Action: Action,
              // reminder:Reminder
              });
            }

            
            this.setState( ({
              rows: rows
            }));
       
        },
        error => {
          alert(error);
        }
      );
  };
  DateFilterMenu = ()=> {
    const Formittefromdate = moment(localStorage.getItem("fromdate")).format(
      "MM/DD/YYYY"
    );
    const Formittedtodate = moment(localStorage.getItem("todate")).format(
      "MM/DD/YYYY"
    );
    this.setState({
      fromdate: Formittefromdate,
      todate: Formittedtodate,
    })
    let url=localStorage.getItem("url") +"/alpha/MobileGetAgendaList?from_date="+Formittefromdate+"&to_date="+Formittedtodate;
    console.log(url);
    fetch(url, {
      method: "GET",
      //body: data
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(
        result => {
          console.log(result);
          this.setState({
            isSavedCalled:false
          });
          var rows=[];
          const Formitteddatofbirth = moment(this.state.date_of_birth).format(
            "MM/DD/YYYY"
          );
          var moment1 = require('moment-timezone');
          console.log(result["upcoming_appointments"].length);
            for (var i = 0; i < result["upcoming_appointments"].length; i++) {
              const first_name=result.upcoming_appointments[i]["first_name"];
              const last_name=result.upcoming_appointments[i]["last_name"];
              const start_time=result.upcoming_appointments[i]["start_time"];
              const Appointment=result.upcoming_appointments[i]["appointment_id"];
              const UserId=result.upcoming_appointments[i]["user_id"];
              const patientNumber=i;
              const Action=<Button   size="small"  style={{backgroundColor:"rgba(224, 224, 224, 1)",color:"rgba(97, 97, 97, 0.9)"}}>View</Button>;              
              
              if(result.upcoming_appointments[i]["status"]=="Partially Completed" || result.upcoming_appointments[i]["status"]=="Completed"){
                Action=<Button variant="contained" size="small" disableElevation color="primary" onClick={(event) =>this.CheckListView(Appointment,UserId,first_name,last_name)}>View</Button>;
              }
              rows.push({
                Aid:result.upcoming_appointments[i]["appointment_id"],
                fname: result.upcoming_appointments[i]["first_name"],
                lname: result.upcoming_appointments[i]["last_name"],
                status: result.upcoming_appointments[i]["status"],
                doa: moment(result.upcoming_appointments[i]["appointment_date"]).format("MM/DD/YYYY"),
                starttime: result.upcoming_appointments[i]["start_time"],
                Action: Action,
              // reminder:Reminder
              });
            }
  
            
            this.setState( ({
              rows: rows
            }));
       
        },
        error => {
          this.setState({
            isSavedCalled:false
          });
          alert(error);
        }
      );
  };

  handleFromDate = (event) => {
    this.setState({ fromdate: event });
  };
 
  handleToDate = (event) => {
    this.setState({ todate: event });
  };
  componentDidMount() {
    console.log(localStorage.getItem("fromdate"));
    console.log(localStorage.getItem("todate"))
    if(localStorage.getItem("User_ID")==null){
      window.location = "#/";
    }else{
      if(localStorage.getItem("fromdate")!=""||localStorage.getItem("todate")!=""){
        console.log("aqib")
        this.DateFilterMenu();
      }else{
        console.log("aqib");
        this.handleNextClick();

      }

    }
  }

  render() {
    const {
      rows,
      columns,
      fromdate,
      todate,
      defaultColumnWidths,
      ViewColumn,
    } = this.state;
    const showFilter = this.props.showFilter;
    const showFilterDate = this.props.showFilterTabel;
    console.log("tick");
    console.log(ViewColumn);
    const HighlightedCell = ({ value, style, ...restProps }) => {
      return (
      <Table.Cell
        {...restProps}
        style={{
          backgroundColor: restProps.row.status =="Completed" ? '#3bc3ae' :restProps.row.status =="Partially Completed"?"rgb(234 234 146)":"white",
          padding:"15px",
          ...style,
        }}
      >
        <span
          style={{
            color: restProps.row.status =="Completed" ? 'black' :restProps.row.status =="Partially Completed"?"black":"black",
          }}
        >
          {value}
        </span>
      </Table.Cell>
      );
        };

    const Cell = (props) => {
      const { column } = props;
      if (column.name === 'lname') {
        return (<HighlightedCell {...props} />);
      }
      if (column.name === 'fname') {
        return <HighlightedCell {...props} />;
      }
      if (column.name === 'fname') {
        return <HighlightedCell {...props} />;
      }
      if (column.name === 'Aid') {
        return <HighlightedCell {...props} />;
      }
      if (column.name === 'doa') {
        return <HighlightedCell {...props} />;
      }
      if (column.name === 'starttime') {
        return <HighlightedCell {...props} />;
      }

      if (column.name === 'Action') {
        return <HighlightedCell {...props} />;
      }

      return <Table.Cell {...props} />;
    };
    const MobileAppointmentData =()=> {
      this.setState({
        isSavedCalled:true
      });
      localStorage.setItem("fromdate", "");
      localStorage.setItem("todate", "");
      console.log("aqib2");
      console.log(localStorage.getItem("fromdate"));
      console.log(localStorage.getItem("todate"));
      this.setState({
        fromdate: new Date(),
        todate: new Date(),
      })
      let url=localStorage.getItem("url") +"/alpha/MobileGetAgendaList";
    console.log(url);
    fetch(url, {
      method: "GET",
      //body: data
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(
        result => {
          console.log(result);
          this.setState({
            isSavedCalled:false
          });
          var rows=[];
          const Formitteddatofbirth = moment(this.state.date_of_birth).format(
            "MM/DD/YYYY"
          );
          console.log(result["upcoming_appointments"].length);
            for (var i = 0; i < result["upcoming_appointments"].length; i++) {
              const first_name=result.upcoming_appointments[i]["first_name"];
              const last_name=result.upcoming_appointments[i]["last_name"];
              const start_time=result.upcoming_appointments[i]["start_time"];
              const Appointment=result.upcoming_appointments[i]["appointment_id"];
              const UserId=result.upcoming_appointments[i]["user_id"];
              const patientNumber=i;
              const Action=<Button   size="small"  style={{backgroundColor:"rgba(224, 224, 224, 1)",color:"rgba(97, 97, 97, 0.9)"}}>View</Button>;              
              
              if(result.upcoming_appointments[i]["status"]=="Partially Completed" || result.upcoming_appointments[i]["status"]=="Completed"){
                Action=<Button variant="contained" size="small" disableElevation color="primary" onClick={(event) =>this.CheckListView(Appointment,UserId,first_name,last_name)}>View</Button>;
              }
              rows.push({
                Aid:result.upcoming_appointments[i]["appointment_id"],
                fname: result.upcoming_appointments[i]["first_name"],
                lname: result.upcoming_appointments[i]["last_name"],
                status: result.upcoming_appointments[i]["status"],
                doa: moment(result.upcoming_appointments[i]["appointment_date"]).format("MM/DD/YYYY"),
                starttime: result.upcoming_appointments[i]["start_time"],
                Action: Action,
              // reminder:Reminder
              });
            }

            
            this.setState( ({
              rows: rows
            }));
       
        },
        error => {
          this.setState({
            isSavedCalled:false
          });
          alert(error);
        }
      );
    }

    const GetColumns = () => {
      let url;
      console.log("no select");
       url =
      localStorage.getItem("url") +
      "/ProskAdmin/GetViewAppointmentColumnList?user_id=" +
      this.state.user_id +
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
    };
    const PrintHaseeb = (e)=> {
      console.log("haseeb");
      // console.log(e);
      this.state.HiddenColumn=e
      if(this.state.HiddenColumn.length!="0"){
        this.setState({
          show_button:true,
        });
      }else{
        this.setState({
          show_button:false,
        });
      }
      console.log(this.state.HiddenColumn.length);
      console.log(this.state.HiddenColumn);

    }

    const AppointmentTableViw=()=> {
      let url;
    if(this.state.HiddenColumn!=""){
      this.setState({
        isSavedCalled:true
      });
      console.log("no select");
       url =
      localStorage.getItem("url") +
      "/ProskAdmin/DashboardGetViewAppointmentColumn?user_id=" +
      this.state.user_id +
      "&table_id=2" +
      "&component_id="+this.state.HiddenColumn
    }
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
        if (result["success"] == "1") {
          this.setState({
            isSavedCalled:false
          });
          this.setState({
            show_button:false,
          });
          GetColumns();
        } else {
          this.handleOpenSnackbar(result["error_message"],
            "error"
        )
        }
      })
      .catch((error) =>alert('error'),
      );
 
    }

    const DateFilterMenu = ()=> {
      this.setState({
        isSavedCalled:true
      });
      localStorage.setItem("fromdate", fromdate);
      localStorage.setItem("todate", todate);
      console.log(localStorage.getItem("fromdate"));
      console.log(localStorage.getItem("todate"));
      const Formittefromdate = moment(localStorage.getItem("fromdate")).format(
        "MM/DD/YYYY"
      );
      const Formittedtodate = moment(localStorage.getItem("todate")).format(
        "MM/DD/YYYY"
      );
      
      let url=localStorage.getItem("url") +"/alpha/MobileGetAgendaList?from_date="+Formittefromdate+"&to_date="+Formittedtodate;
      console.log(url);
      fetch(url, {
        method: "GET",
        //body: data
      })
        .then(res => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then(
          result => {
            console.log(result);
            this.setState({
              isSavedCalled:false
            });
            var rows=[];
            const Formitteddatofbirth = moment(this.state.date_of_birth).format(
              "MM/DD/YYYY"
            );
            console.log(result["upcoming_appointments"].length);
            for (var i = 0; i < result["upcoming_appointments"].length; i++) {
              const first_name=result.upcoming_appointments[i]["first_name"];
              const last_name=result.upcoming_appointments[i]["last_name"];
              const start_time=result.upcoming_appointments[i]["start_time"];
              const Appointment=result.upcoming_appointments[i]["appointment_id"];
              const UserId=result.upcoming_appointments[i]["user_id"];
              const patientNumber=i;
              const Action=<Button   size="small"  style={{backgroundColor:"rgba(224, 224, 224, 1)",color:"rgba(97, 97, 97, 0.9)"}}>View</Button>;              
              
              if(result.upcoming_appointments[i]["status"]=="Partially Completed" || result.upcoming_appointments[i]["status"]=="Completed"){
                Action=<Button variant="contained" size="small" disableElevation color="primary" onClick={(event) =>this.CheckListView(Appointment,UserId,first_name,last_name)}>View</Button>;
              }
              rows.push({
                Aid:result.upcoming_appointments[i]["appointment_id"],
                fname: result.upcoming_appointments[i]["first_name"],
                lname: result.upcoming_appointments[i]["last_name"],
                status: result.upcoming_appointments[i]["status"],
                doa: moment(result.upcoming_appointments[i]["appointment_date"]).format("MM/DD/YYYY"),
                starttime: result.upcoming_appointments[i]["start_time"],
                Action: Action,
              // reminder:Reminder
              });
            }
    
              
              this.setState( ({
                rows: rows
              }));
         
          },
          error => {
            this.setState({
              isSavedCalled:false
            });
            alert(error);
          }
        );
    };
    const toLowerCase = value => String(value).toLowerCase();
const cityPredicate = (value, filter) => toLowerCase(value).startsWith(toLowerCase(filter.value));

    return (
      <div>
        {showFilterDate?null:<div style={{display:"flex"}}>
          <div style={{marginLeft:"20px",marginBottom:"20px",marginTop:"10px",width:"30%"}}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        keyboard
                          views={["year", "month", "day"]}
                          format={"MM/dd/yyyy"}
                        label="From Date"
                        name="FromDate"
                        id="FromDate"
                        mask={(value) =>
                          // handle clearing outside if value can be changed outside of the component
                          value
                            ? [
                                /\d/,
                                /\d/,
                                "/",
                                /\d/,
                                /\d/,
                                "/",
                                /\d/,
                                /\d/,
                                /\d/,
                                /\d/,
                              ]
                            : []
                        }
                        disableOpenOnEnter
                        animateYearScrolling={false}
                        style={{ width: "99%",height:"16px" }}
                        onChange={this.handleFromDate}
                        value={this.state.fromdate}
                         variant="outlined"
                      />
                    </MuiPickersUtilsProvider>
          </div>
            <div style={{marginLeft:"13px",marginBottom:"20px",marginTop:"10px",width:"30%"}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        keyboard
                        format={"MM/dd/yyyy"}
                        label="To Date"
                        name="ToDate"
                        id="ToDate"
                        style={{ width: "99%",height:"16px" }}
                        onChange={this.handleToDate}
                        value={this.state.todate}
                         variant="outlined"
                      />
                    </MuiPickersUtilsProvider>
              </div>  
            <div style={{marginLeft:"13px",marginBottom:"20px",marginTop:"11px"}}>
            <Button  variant="contained" size="large" color="primary" style={{height:"50px"}}    onClick={DateFilterMenu}>
                    Search
                  </Button>
            </div>
            <div style={{marginLeft:"13px",marginBottom:"20px",marginTop:"11px"}}>
            <Button variant="contained" size="large" color="primary" style={{height:"50px"}}        onClick={MobileAppointmentData}>
                    Reset
                  </Button>
                  
            </div>
          </div>}
          <div align="right">
          {this.state.show_button?<Button 
          onClick={AppointmentTableViw}
          variant="contained" size="medium" color="primary" style={{marginRight:"88px",marginBottom:"11px",position:"absolute",right:"0",top:"105px"}} >
          Save as default
        </Button>:
          <div></div>}
          </div>
      <Paper elevation={2}>
          <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={this.state.open}
    autoHideDuration={4000}
    onClose={this.handleClose}
  ><Alert onClose={this.handleClose} severity="info">
  Email Already Sent!
</Alert>
</Snackbar>

<Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    open={this.state.open1}
    autoHideDuration={4000}
    onClose={this.handleClose1}
  ><Alert onClose={this.handleClose1} severity="success">
  Email Sent to {this.state.first_name} {this.state.last_name}
</Alert>
</Snackbar>
<ReactOverlayLoader 
      loaderContent={<span style={{ color: "#ffffff" }}> Please wait...</span>}
      isActive={this.state.isSavedCalled}
      iconType='TailSpin'
      style={{
        backgroundColor: "rgb(47 46 46 / 81%)"
      }}
    >
      
<Grid rows={rows} columns={columns} style={{ height: 200 }} >
          <SortingState />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering  />
          <Table cellComponent={Cell}/>
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} /> 
        <TableHeaderRow showSortingControls  />
        {showFilter ? <TableFilterRow showFilterSelector  /> : null}
          <TableColumnVisibility 
           defaultHiddenColumnNames={ViewColumn}
          onHiddenColumnNamesChange={PrintHaseeb}
          />
          
          <Toolbar />
          
        <ColumnChooser />
        </Grid>
    </ReactOverlayLoader>
      </Paper>
      </div>

    );
  }
}

export default UpcomingAppointmentsListTabel;
