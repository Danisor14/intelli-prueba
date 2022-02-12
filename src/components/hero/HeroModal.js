import React from "react";
import { useSelector } from "react-redux"
import {
  makeStyles,
  Typography,
  Grid,
  Modal,
  IconButton,
  Backdrop,
  Grow,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    flexBasis: "content",
    maxWidth: 400,
    color: "#403B3B",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    background: "#67dabb",
  },
  textHeader: {
    marginLeft: 40,
    color: "#181721",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxHeight: 550
  },
  imgContainer: {
    width: "100%",
  },
  img: {
    width: "100%",
    height: 150,
    objectFit: "cover",
  },
  textContainer: {
    width: "90%",
    marginBottom: 10,
  },
  comicText: {
    fontSize: 10,
  },
  viewMore: {
    color: "#757575",
    textDecoration: "none",
    marginBottom: 10,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const HeroModal = ({ open, handleClose }) => {
  const classes = useStyles();
  const heroInformation = useSelector(state => state.hero.heroInfo);
  const comics = useSelector(state => state.hero.comics);
  const image = useSelector(state => state.hero.thumbnail);
  const url = useSelector(state => state.hero.url);


  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={() => handleClose()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Grow in={open}>
        <Grid
          container
          item
          xs={12}
          className={classes.paper}
          direction="column"
        >
          <div className={classes.header}>
            <Typography variant="h5" className={classes.textHeader}>
              {heroInformation}
            </Typography>
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.body}>
            <div className={classes.imgContainer}>
              <img className={classes.img} src={`${image[0]}.${image[1]}`} />
            </div>
            <div className={classes.textContainer}>
              <Typography variant="subtitle1">Comics:</Typography>
              {comics.map((comic, index) => (
                <Typography key={index} className={classes.comicText}>{comic}</Typography>
              ))}
            </div>
            <a href={url} target="_blank" className={classes.viewMore}>
              View more...
            </a>
          </div>
        </Grid>
      </Grow>
    </Modal>
  );
};

export default HeroModal;
