import React, {useState} from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useMenu } from '../../hooks/useMenu';


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
    paddingLeft: 30,
    " &.MuiListItem-button": {
      "&:hover": {
        background: "#26243e",
      },
    },
  },
  subMenuItem: {
    paddingLeft: 50,
  },
}));


const SubMenuItem = ({ down }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { configurationSubMenu } = useMenu();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem 
        key={down.id_module} 
        button 
        onClick={handleClick}
        className={classes.listItem}
      >  
        <ListItemText
          primary={down.module.replaceAll("_", " ").toLowerCase()}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {configurationSubMenu.map((item) => {
        return item.path.includes(down.path) ? (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={[classes.listItem, classes.subMenuItem]}
              >
                <ListItemText>
                  {item.module.replaceAll("_", " ").toLowerCase()}
                </ListItemText>
              </ListItem>
            </List>
          </Collapse>
        ) : null;
      })}
    </>
  );
};
 
 
export default SubMenuItem;