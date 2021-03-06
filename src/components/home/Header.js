import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { drawerWidth } from "./DrawerComponent";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/loginAction";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      borderTopLeftRadius: 40,
    },
    backgroundColor: "#252433",
    boxShadow: "none",
  },
  toolbar: {
    paddingTop: 25,
  },
  helloContainer: {
    flexGrow: 1,
  },
  helloText: {
    textTransform: "capitalize"
  },
  welcomeText: {
    fontSize: 10,
  },
  btnLogOut: {
    textTransform: "none",
  },
}));

const Header = ({ handleOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const name = useSelector((state) => state.device.userData.user.first_name);

  const handleClick = () => {
    dispatch(logOut());
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu-icon"
          onClick={() => handleOpen()}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.helloContainer}>
          <Typography className={classes.helloText} variant="h5">
            Hello, {name.toLowerCase()}
          </Typography>
          <Typography className={classes.welcomeText}>
            Make confortable!
          </Typography>
        </div>

        <Button
          variant="contained"
          color="default"
          size="small"
          startIcon={<ExitToAppOutlinedIcon />}
          onClick={handleClick}
          classes={{
            root: classes.btnLogOut,
          }}
        >
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
