import React from "react";
import { Divider, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import { useMenu } from "../../hooks/useMenu";
import SubMenu from "./SubMenu";

const useStyles = makeStyles((theme) => ({
  list: {
    "& .MuiButtonBase-root": {
      color: "#e9e9e9",
    },
    "& .MuiTypography-body1": {
      fontSize: "0.9rem",
      fontWeight: 510,
      textTransform: "capitalize",
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
}));


const Menu = () => {
    
    const classes = useStyles();

    const {
      configurationMenu,
      sidebarUp,
      sidebarCenter,
      sidebarDown,
    } = useMenu();


    return (
      <>
        <List component="nav" className={classes.list}>
          {sidebarUp.map((up) => (
            <ListItem 
              button 
              className={classes.listItem} s
              key={up.id_module}
            >
              <ListItemText
                primary={up.module.replaceAll("_", " ").toLowerCase()}
              />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.divider} />
        <List component="nav" className={classes.list}>
          {sidebarCenter.map((center) => (
            <ListItem
              button
              className={classes.listItem}
              key={center.id_module}
            >
              <ListItemText
                primary={center.module.replaceAll("_", " ").toLowerCase()}
              />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.divider} />
        <List component="nav" className={classes.list}>
          {sidebarDown.map((down) => (
            <SubMenu down={down} configurationMenu={configurationMenu} />
          ))}
        </List>
      </>
    );
}
 
export default Menu;
