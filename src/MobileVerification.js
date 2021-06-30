import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo1 from "./logo1.png";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import * as firebase from "firebase";
import Medicine from "./images/verification.png";
import prosk from "./images/Logo-02.png";
import CustomizedSnackbar from './customizesnackbar/CustomizedSnackbar.js'
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
grow: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton color="inherit" aria-label="Menu">
            <img src={logo1} width={40} />
          </IconButton> */}
          <Typography variant="h6" color="inherit">
            PROSK PATIENT.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
// var firebaseConfig = {
//   apiKey: "AIzaSyDLVda3ezoTnE1DxtGWDieX8XBWVHZeRwM",
//   authDomain: "proskpatient.firebaseapp.com",
//   databaseURL: "https://proskpatient.firebaseio.com",
//   projectId: "proskpatient",
//   storageBucket: "proskpatient.appspot.com",
//   messagingSenderId: "1024430389293",
//   appId: "1:1024430389293:web:51318899e0a81f66cfa0a4",
//   measurementId: "G-YM1DWF6K51",
// };
// var app = firebase.initializeApp(firebaseConfig);

class MobileVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedB: true,
      verificationCode: "",
      isSavedCalled:false,
      showmobileNo:"",
      isOpenSnackbar: false,
      snackbarMessage: "",
      snackbarSeverity: "",
      mytoken:null,
      Ip_Address:"",
      isAnroid:"0",
      isIos:"0",
      isWeb:"1",
      dob:"0",
      vfcode:"0",
      LogId:"",
      code_valid:"1",
      Error_message:"",
      is_code_valid2:"0"

    };
  }
  verificationCode = (event) => {
    this.setState({
      verificationCode: event.target.value,
    });
  };

  getIpAddress=()=>{
    this.state.Ip_Address = require('ip');
    console.log(this.state.Ip_Address.address());
  }

  componentDidMount() {
  }

handleSubmit(event, state) {
  const data = new FormData(event.target);
  event.preventDefault();
  if(this.state.verificationCode==localStorage.getItem("verification_code")){
    this.props.history.push("/home/");
  }else{
    alert("Incorrect Verification Code");
  }

  // if(this.state.verificationCode=="1111"){
  //   this.props.history.push("/home/");
  // }else{
  //   alert("Incorrect Password");
  // }

 
}
  handleOpenSnackbar = (msg, severity) => {
    this.setState({
        isOpenSnackbar: true,
        snackbarMessage: msg,
        snackbarSeverity: severity,
    });
};
  handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
        return;
    }
    this.setState({
        isOpenSnackbar: false,
    });
};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
       <AppBar position="fixed">
        <Toolbar variant="dense">
        <img src={prosk} width={80} height={30} />
          {/* <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            ProskAdmin™
          </Typography> */}
<div className={classes.grow}/>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            style={{textAlign:"center"}}
          >
            Verification
          </Typography>
          <div className={classes.grow}/>
          
        </Toolbar>
      </AppBar>
        <Grid>
          <Grid item xs={12}>
            <form
              onSubmit={(event) => this.handleSubmit(event, this.state)}
              autoComplete="off"
            >
              <CustomizedSnackbar
                    isOpen={this.state.isOpenSnackbar}
                    message={this.state.snackbarMessage}
                    severity={this.state.snackbarSeverity}
                    handleCloseSnackbar={() => this.handleCloseSnackbar()}
                />
              <div id="recaptcha-container"></div>
              <Grid
                style={{ textAlign: "center", marginTop: "7%" }}
                item
                xs={12}
              >
                <Typography
                  style={{ textAlign: "left" }}
                  variant="subtitle1"
                  style={{ marginBottom: "-1%" ,marginTop: "60px" }}
                >
                 To confirm your identity, you will need to enter a verification code sent to your number: {this.state.mobileNo}
                </Typography>
                </Grid>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Grid
                    style={{ textAlign: "center", marginTop: "2%" }}
                    item
                    xs={12} sm={12}
                  >
                    <TextField
                      autoFocus
                      id="verification_code"
                      name="verificationCode"
                      label="Verification Code"
                      className={classes.textField}
                      margin="normal"
                      style={{ width: 350 }}
                      inputProps={{
                        maxLength: 6,
                      }}
                      value={this.state.verificationCode}
                      onChange={this.verificationCode}
                    />
                    <Button
                                       type="submit"
                                       variant="contained"
                                       color="primary"
                                       className={classes.button}
                                       style={{ marginTop: "2%", marginLeft: "2%" }}
                                     >
                                       Continue
                                     </Button> 
                    {/* <center>
                 
                 <Grid xs={12} style={{ textAlign: "center" }}>
                   <Typography
                   ref="phoneNumber"
                     color="primary"
                     variant="title"
                     style={{ marginBottom: "-1%",textAlign: "center",marginRight:"9%" }}
                   >
                    Didn't receive the code? <a href={"#"} style={{color:"black",fontWeight:"BOLD"}}>Resend</a>
                   </Typography>
                 </Grid>
</center> */}

                  </Grid>

                </div>

                <br />
    
              <Grid xs={4} sm={12} style={{ textAlign: "center" }}>
              <img src={Medicine} height="250px"/>
                  </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}
DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

MobileVerification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MobileVerification);
