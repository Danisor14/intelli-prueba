import React from "react";
import { Drawer, makeStyles, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#181721",
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181721",
  },
  title: {
    fontWeight: "bold",
    color: "#67dabb",
  },
  spanTitle: {
    fontSize: 20,
    color: "#E9E9E9",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  btnNew: {
    width: "80%",
    padding: 10,
    marginTop: 10,
    marginBottom: 50,
    background: "#67dabb",
    color: "#181721",
    "&:hover": {
      background: "#62b8a1",
    },
  },
  list: {
    "& .MuiButtonBase-root": {
      color: "#e9e9e9",
    },
    "& .MuiTypography-body1": {
      fontSize: "0.9rem",
      fontWeight: 510,
    },
  },
  listItem: {
    " &.MuiListItem-button": {
      "&:hover": {
        background: "#26243e",
      },
    },
  },
  divider: {
    background: "#2b284d",
  },
  icon: {
    color: "#E9E9E9",
  },
  link: {
    textDecoration: "none",
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>
        <Typography variant="h4" className={classes.title}>
          Intelli<span className={classes.spanTitle}>Test</span>
        </Typography>
      </div>

      <List component="nav" className={classes.list}>
        <Link to="devices" className={classes.link}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <DevicesOtherIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={"Devices"} className={classes.text} />
          </ListItem>
        </Link>
        <Link to="heroes" className={classes.link}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon>
              <EmojiEventsIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={"Heroes"} className={classes.text} />
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <Menu />
    </Drawer>
  );
};

export default DrawerComponent;
