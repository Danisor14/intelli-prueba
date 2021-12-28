import React, { useState } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import SubMenuItem from './SubMenuItem';


const useStyles = makeStyles((theme) => ({
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
}));

const SubMenu = ({ down, configurationMenu }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem 
        className={classes.listItem}
        key={down.id_module} 
        button 
        onClick={handleClick}
      >
        <ListItemText
          primary={down.module.replaceAll("_", " ").toLowerCase()}
          classes={classes.text} 
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {configurationMenu.map((item) => {
        return item.path.includes(down.path) ? (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              component="nav"
              disablePadding
            >
              <SubMenuItem down={item} />
            </List>
          </Collapse>
        ) : null;
      })}
    </>
  );
};
 
export default SubMenu;