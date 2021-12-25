import React from 'react';
import {makeStyles, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import welcomeImg from '../../assets/welcome.png'


const useStyles = makeStyles(() => ({
  container: {
    margin: 'auto 0',
    textAlign: "center",
    color: "#e9e9e9",
  },
  link: {
    textDecoration: "none",
    color: "#67dabb",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
      <div className={classes.container}>
        <img src={welcomeImg} />
        <Typography variant="body2">
          thank you for using our services
        </Typography>
        <Typography variant="body2">have a look at</Typography>
        <Typography variant="body2">
          <Link className={classes.link} to="devices">
            devices
          </Link>{" "}
          or{" "}
          <Link className={classes.link} to="heroes">
            heroes
          </Link>
        </Typography>
      </div>
    );
}
 
export default Welcome;