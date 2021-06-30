import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import prosk from "./images/Logo-02.png";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import { Link } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { properties } from "./properties.js";
import MuiAlert from '@material-ui/lab/Alert';
import loader from "./images/loading.gif";
import PC from "./images/pc.png";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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
        <img src={prosk} width={80} height={30} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
class LoginArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedB: true,
      username: "",
      password: "",
      showlogo:false,
    };
    localStorage.setItem("url", properties.url);
  }
  handleChange = (event) => {
    this.setState({
      checkedB: event.target.checked,
    });
  };
  username = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  password = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  loginVerificationCode() {
    const dataTomcat = new FormData();
    dataTomcat.append("verification_code", 1111);

    let url = localStorage.getItem("url") + "/hsa/authentication/C40VerifyCode";

    fetch(url, {
      method: "POST",
      body: dataTomcat,
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("token"),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(
        (result) => {
          if (result.success == 1) {
            if (result) {
              window.features = result.features;
              localStorage.setItem("features", JSON.stringify(result.features));
              console.log(JSON.parse(localStorage.getItem("features")));
              this.props.history.push("/home/");
            }
          } else if (result.error == 1) {
            alert(result.error_message);
          }
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // error => {
        //  alert('error:'+error.status);
        // }
      )
      .catch((error) =>
        error.status == 401
          ? alert("Invalid/Expired token, Please login again to continue")
          : alert("An error occured: " + error.status)
      );
  }
  MobileCheckUserExists = () => {
    const dataTomcat = new FormData();

  };
  handleSubmit(event) {
    event.preventDefault();
    let url =localStorage.getItem("url") +"/mobile/MobileTwoStepAuthenticationPhysician?UserName="+this.state.username+
    "&Password="+this.state.password;
    console.log(url)
    fetch(url, {
      method: "POST",
    })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((result) => {
      console.log(result)
      if (result["success"] == "1") {
        console.log("1")
        localStorage.setItem("verification_code",result["verification_code"]);
        localStorage.setItem("User_Phone",result["phone_no"].toString()); 
        localStorage.setItem("User_ID", result["UserID"].toString());
        localStorage.setItem("User_Email",result["Email"].toString()); 
        this.props.history.push("/MobileVerification/"); 
      } else {
        alert(result["error_message"]);
        window.location="#/"
      }
    })
    .catch((error) => alert("An error occured: " + error));

  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }
  componentDidMount() {
    localStorage.clear();
    localStorage.setItem('url',properties.url);


    this.authenticate().then(() => {
      console.log("dd");
      this.setState({
        showlogo:true
      });
    })
}


  ResetPassword() {
    this.props.history.push("/ResetPassword/");
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        {this.state.showlogo?<DenseAppBar classes={classes} />:<div></div>}
        {this.state.showlogo?
        <Grid>
          <Grid item xs={12}>
            <form
              id="myForm"
              name="myForm"
              onSubmit={(event) => this.handleSubmit(event, this.state)}
              encType={"application/json"}
              key="myForm"
            >
              <Grid
                style={{ textAlign: "center", marginTop: "10%" }}
                item
                xs={12}
              >
                <Grid container>
                  <Grid xs={5} />
                  <Grid xs={2} style={{ textAlign: "center" }}>
                    <Typography
                      color="primary"
                      style={{ textAlign: "center", marginBottom: "-1%" }}
                      variant="h6"
                    >
                      Log in to <b>Prosk Admin</b>
                    </Typography>
                  </Grid>
                </Grid>

                <TextField
                  id="user_id"
                  name="username"
                  label="User Name"
                  className={classes.textField}
                  margin="normal"
                  style={{ width: 300 }}
                  value={this.state.username}
                  onChange={this.username}
                />
                <br />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  margin="normal"
                  style={{ width: 300 }}
                  value={this.state.password}
                  onChange={this.password}
                />
                <br />
                <br />

                <Button
                  style={{ marginLeft: "16em" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Login
                </Button>

                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <br />
                <Grid container>
                  <Grid xs={5} />
                  <Grid xs={2}>
                    <Divider variant="middle" />
                  </Grid>
                </Grid>
                <Link to={"ForgetPassword"}>
                  <Button
                    color="primary"
                    variant="text"
                    style={{ textTransform: "none" }}
                    onClick={this.ResetPassword}
                  >
                    Forgot ID or password?
                  </Button>
                </Link>
                <br />
              </Grid>
            </form>
          </Grid>
        </Grid>:<Grid item xs={12} sm={12} container style={{backgroundColor:window.innerHeight>786?"white":"white"}}>
            <img src={PC}   style={{margin:window.innerHeight>786?"85% auto 20px":"18% auto 20px",display:"block"}} />
            </Grid>}
      </div>
    );
  }
}
export default withStyles(useStyles)(LoginArea);
