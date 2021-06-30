import React, { useState } from "react";
import { XGrid } from '@material-ui/x-grid';
import Paper from "@material-ui/core/Paper";
import * as PropTypes from "prop-types";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableColumnResizing,
  VirtualTable,
  PagingPanel
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

import MuiAlert from '@material-ui/lab/Alert';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const styles = {
  numericInput: {
    textAlign: "right",
    width: "100%"
  }
  
};
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class AppointmentPatientListTabelComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      middle_name:"",
      last_name:"",

      open:false,
      setOpen:false,
      open1:false,
      setOpen1:false,
      last_name:"",
      phone:"",
      email:"",
      gender_val:"",
      
      columns: [
        { name: "name", title: "Name", },
        { name: "email", title: "Email",},
        { name: "phone", title: "Phone",},
        { name: "dob", title: "DOB"},
        { name: "gender", title: "Gender"},
        { name: "Action", title: "Appointments"},
      ],
      rows: [],
      columnData: [{name: "name", value: 'ZUku'}],
      defaultColumnWidths: [  
        { columnName: "name", width: 200  },
        { columnName: "email", width: 200 },
        { columnName: "phone", width: 200 },
        { columnName: "dob", width: 200 },
        { columnName: "gender", width: 200},
        { columnName: "Action", width: 150 }, 
      ],
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
  
  CheckListView=(PatientId)=>{
    localStorage.setItem("patient_id",PatientId);
        this.NavigateNextPage(); 
      
 };
 NavigateNextPage=()=>{
    window.location = "#/ProskAdmin/DocumentsAppointmentList";  
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

  handleNextClick = index => {
    let url=localStorage.getItem("url") +"/ProskAdmin/DashboardDocumentGetPatient";
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
          console.log(result["DATA"]);
          var rows=[];
          var moment1 = require('moment-timezone');
            for (var i = 0; i < result["DATA"].length; i++) {
              const PatientId=result.DATA[i]["id"];
              const Action="";
              const Email="";
              const Phone="";
              Action=<Button variant="outlined" style={{padding:"10px"}}    color="primary" onClick={(event) =>this.CheckListView(PatientId)} >View</Button>
              rows.push({
                name: result.DATA[i]["first_name"]+" "+ result.DATA[i]["last_name"],
                email: result.DATA[i]["email"],
                phone: result.DATA[i]["phone_number"],
                dob: moment(result.DATA[i]["date_of_birth"]).format("MM/DD/YYYY"),
                gender: result.DATA[i]["gender"],
                Action: Action
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


  componentDidMount() {
    // alert('test');
    if(localStorage.getItem("User_ID")==null){
      console.log("aqib")
      window.location = "#/";
    }else{
      this.handleNextClick("test");
    }
  }

  render() {
    const {
      rows,
      columns,
      defaultColumnWidths,
    } = this.state;
    const showFilter = this.props.showFilter;

    return (
    
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
        <Grid rows={rows} columns={columns} >
          <SortingState />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} />
          <IntegratedFiltering />
          <Table/>
          <TableColumnResizing defaultColumnWidths={defaultColumnWidths} />
       
       <TableHeaderRow showSortingControls  />
          {showFilter ? <TableFilterRow showFilterSelector /> : null}
        </Grid>
      </Paper>
    );
  }
}

export default AppointmentPatientListTabelComponent;
