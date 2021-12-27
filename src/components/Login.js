import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  TextField,
  Slide,
} from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/deviceAction";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh", 
    justifyContent: "center",
    alignItems: "center",
    background: "#181721",
  },
  errorMsg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    background: "#67dabb",
    color: "#181721",
    borderRadius: 5,
  },
  icon: {
    marginRight: 10
  },
  loginContainer: {
    maxWidth: 700,
    padding: 30,
  },
  signIn: {
    padding: 30,
    background: "#E9E9E9",
  },
  singUp: {
    padding: 30,
    background: "#67DABB",
    color: "#181721",
  },
  textSingIn: {
    marginBottom: 20,
    fontFamily: "Merriweather Sans",
  },
  textField: {
    marginBottom: 15,
  },
  textWelcome: {
    marginBottom: 20,
    textAlign: "center",
  },
  btnIn: {
    background: "#67dabb",
    color: "#181721",
    "&:hover": {
      backgroundColor: "#62b8a1",
    },
  },
  btnUp: {
    color: "#181721",
    borderColor: "#181721",
  },
  textfield: {
    "& label.Mui-focused": {
      color: "#181721",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#181721",
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const errorMsg = useSelector(state => state.device.error);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch(login(user));
  };

  return (
    <div className={classes.container}>
      <Grid container direction="row" className={classes.loginContainer}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.singUp}
        >
          <Typography variant="h4" className={classes.textSingIn}>
            Hello, Friend!
          </Typography>
          <Typography variant="body2" className={classes.textWelcome}>
            Make you comfortable with Intelli-ReactTest
          </Typography>

          <Button
            variant="outlined"
            classes={{
              outlined: classes.btnUp,
            }}
          >
            Sing Up
          </Button>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className={classes.signIn}
        >
          <Typography variant="h4" className={classes.textSingIn}>
            Sing in
          </Typography>
          <TextField
            label="Email"
            variant="filled"
            name="email"
            value={user.email}
            className={classes.textField}
            classes={{
              root: classes.textfield,
            }}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            name="password"
            value={user.password}
            className={classes.textField}
            classes={{
              root: classes.textfield,
            }}
            onChange={(e) => handleChange(e)}
          />
          <Button
            variant="contained"
            classes={{
              root: classes.btnIn,
            }}
            onClick={handleClick}
          >
            Sing in
          </Button>
        </Grid>
      </Grid>
      {errorMsg ? (
        <Slide direction="up" in={errorMsg ? true : false} mountOnEnter unmountOnExit>
          <div className={classes.errorMsg}>
            <ErrorOutlineIcon className={classes.icon} />
            <Typography variant="body2">{`Error: ${errorMsg.error}, ${errorMsg.msg}`}</Typography>
          </div>
        </Slide>
      ) : null}
    </div>
  );
};

export default Login;
