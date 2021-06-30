import React, { useState, useEffect,Fragment } from "react";
import {
  Grid,
  Card,
  IconButton,
  CardHeader,
  Typography,
  CardContent,
  Avatar,
  Stepper,
  ListItemText,
  ListItemIcon,
  Step,
  Image,
  StepButton,
  CircularProgress,
  Divider,
  ListItem,
  
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InputBase from '@material-ui/core/InputBase';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, withStyles } from "@material-ui/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FormControl from "@material-ui/core/FormControl";

import CarePhysician from "./images/CarePhysician.png";
import FemalCarePhysician from "./images/FemalCare.jpg";
import { useDropzone } from "react-dropzone";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
    margin: 10,
  },
  inline: {
    display: "inline",
  },
  iconSmall: {
    fontSize: 20,
  },
  card: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px",
  },
  divider: {
    // Theme Color, or use css color in quote
    background: "#009688",
},
divider2: {
    // Theme Color, or use css color in quote
    background: "#afafaf",
},
});

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  bigAvatar: {
    margin: 10,
  },

  inline: {
    display: "inline",
  },
  card: {
    marginLeft: "50%",
    marginRight: "50%",
    marginTop: "10px",
  },
}));
function getSteps() {
  return ["Front ID Card", "Back ID Card"];
}
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};


class PhysicianCareTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: localStorage.getItem("user_id"),
      PhysicianCareTeam:[],

    };
  }
  MobileGetUserConsentData() {
    let url =localStorage.getItem('url') + "/MobilePysicianCareTeam?User_id="+this.state.UserId;
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
        this.setState({
            PhysicianCareTeam:result["DATA"],

        });
        console.log(this.state.PhysicianCareTeam)
      })
      .catch((error) =>alert('error'),
      );
  }
  ProblemAreaId(ProblemAreaId){
      console.log(ProblemAreaId)
      localStorage.setItem("problem_area_id", ProblemAreaId);
      window.location = "#/Home";
  }
  handleMenu = (event) => {
    window.location = "#/ProskAdmin/ShowAllUpcomingAppointmentListDetail";
  };

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };

  componentDidMount() {
   this.MobileGetUserConsentData();

  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <IconButton color="inherit" onClick={this.handleMenu}>
              <ArrowBackIcon /> <Typography
                color="inherit"
                noWrap
              >
                Back
            </Typography>
            </IconButton>
            <div className={classes.grow}> </div>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              style={{ textAlign: "center" }}
            >
             Care Team
            </Typography>
            <div className={classes.grow}> </div>
          </Toolbar>
        </AppBar>
        <Grid
          container
          style={{ marginTop: "60px"}}
          direction="row"
          justify="center"
          alignItems="center"
        >
 <Grid  item xs={12} sm={12} style={{ marginBottom: "10px",marginTop:"10px" }}>
                  <Typography variant="title" style={{ marginLeft: "15px",fontFamily: "Arial",fontWeight:"bold",fontSize:"18px" }}>
                  Primary Care Physician
                  </Typography>
                  </Grid>
            <Card style={{ width: "98%" }}>
                <CardContent>
                <Grid container spacing={4}> 
            <Grid item xs={12} sm={12}>
            {this.state.PhysicianCareTeam!=""?  
                    this.state.PhysicianCareTeam.map((data, index)=> 
                      <Fragment key={"PendingOrderListItem"+index}>
                        {index ? <Divider variant="fullWidth" /> : ""}
                        <ListItem>

                        <img
                                className={classes.bigAvatar}
                                src={data.gender=="Female"?FemalCarePhysician:CarePhysician}
                                style={{ width: data.gender=="Female"?"100px":"100px" }}
                              />
                        <ListItemText 
                          button
                          style={{padding:8}} 
                          primary={
                            <Typography
                            
                              style={{
                                fontSize: "25px",
                                fontFamily: "Arial",
                              }}
                            >
                              {data.name} {data.speciality==""?"":"("+data.speciality+")"}
                            </Typography>
                          } 
                          secondary={
                            <span style={{color:"rgb(41 39 39);", fontSize:"15px",}}>
                            <span style={{color:"#464646;",padding:"10px",fontFamily:"Arial"}}>{data.address==""?"not available":data.address}</span>
                            <br/>
                            <span style={{color:"#464646;",padding:"10px",fontFamily:"Arial"}}>{data.phone_no==""?"not available":data.phone_no}</span>
                            <br/>
                            <span style={{color:"#464646;",padding:"10px",fontFamily:"Arial"}}>{data.gender==""?"not available":data.gender}</span>
                          </span> 
                          }
                        >
                        </ListItemText>
                        </ListItem>
                      </Fragment>
                    ):<div></div>}
                {/* {this.state.PhysicianCareTeam!=""?this.state.PhysicianCareTeam.map((data,index)=>
                 <Fragment key={"doc_type"+index}>
                 {index ? <Divider variant="fullWidth" /> : ""}
                 <ListItem 
                  button
                   
                 >
                      <ListItemText
                      primary={
                        <Typography
                        
                          style={{
                            fontSize: "25px",
                            fontFamily: "Arial",
                          }}
                        >
                          {data.name}
                        </Typography>
                      }  secondary={
                        <Typography
                        
                          style={{
                            fontSize: "13px",
                            fontFamily: "Arial",
                          }}
                        >
                          {data.speciality}
                        </Typography>
                      } 
                      pri
                      />
                       <ListItemIcon
                       style={{color:"#009688"}}
                       >
                       <KeyboardArrowRightIcon />
                       </ListItemIcon>
                 </ListItem>
                 <Divider classes={{root: classes.divider}} />
               </Fragment>
                ):<div></div>} */}
            </Grid>
        </Grid>
                </CardContent>
            </Card>
        </Grid>

      </div>
    );
  }
}

export default withStyles(useStyles)(PhysicianCareTeam);
