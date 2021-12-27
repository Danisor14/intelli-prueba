import React, {useState} from 'react';
import {makeStyles, Paper, InputBase, IconButton, Divider, Typography, Card, CardMedia, CardContent, Button} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import defaultDevice from "../assets/defaultDevice.png";
import {useDispatch, useSelector} from "react-redux";
import { getDevices, loadMore } from '../actions/deviceAction';
import searchImage from "../assets/search.png";


const useStyles = makeStyles(() => ({
  container: {
    width: "90%",
    padding: 20,
    marginTop: 70,
    marginBottom: 50,
    borderRadius: 10,
    background: "#181721",
  },
  searchContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    marginRight: 40,
    fontWeight: 600,
    color: "#e9e9e9",
  },
  searchPaper: {
    display: "flex",
    minWidth: 280,
    height: 28,
    padding: "2px 4px",
    alignItems: "center",
  },
  searchDivider: {
    height: 20,
    margin: 4,
  },
  inputBase: {
    flexGrow: 1,
    paddingLeft: 10,
  },
  searchImage: {
    height: 250,
    width: 250
  },
  textImage: {
    color: "#e9e9e9"
  },
  resultContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  root: {
    display: "flex",
    maxWidth: 300,
    margin: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  cover: {
    width: 100,
  },
  textModelo: {
    textTransform: "lowercase",
  },
  loadContainer: {
    display: "flex",
    justifyContent: "center"
  },
  btnLoad: {
    alignSelf: "center",
    marginTop: 10,
    color: "#67dabb",
    textTransform: "none",
    "&:hover": {
      background: "#252433",
    },
  },
}));

const Devices = () => {
    const classes = useStyles();
    const [searchData, setSearchData] = useState("");

    const dispatch = useDispatch();
    const results = useSelector(state => state.device.devices);

    const handleClick = () => {
      dispatch(getDevices(searchData));
    }

    const handleKey = () => {
      if(searchData !== "") dispatch(getDevices(searchData));
    };

    const handleLoadMore = () => {
      dispatch(loadMore(searchData, true));
    }

    return (
      <div className={classes.container}>
        <div className={classes.searchContainer}>
          <Typography className={classes.title}>Devices</Typography>

          <Paper className={classes.searchPaper}>
            <InputBase
              placeholder="Search Devices by name"
              className={classes.inputBase}
              onKeyUp={handleKey}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <Divider orientation="vertical" className={classes.searchDivider} />
            <IconButton type="submit" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={classes.resultContainer}>
          {results.length === 0 ? (
            <div>
              <img src={searchImage} className={classes.searchImage} />
              <Typography 
                className={classes.textImage}
                variant="body2"
              > 
                Great, look for something interesting 
              </Typography>
            </div>
          ) : (
            <>
              {results.map((result, index) => (
                <Card className={classes.root} key={index}>
                  <CardMedia
                    className={classes.cover}
                    image={result.photo ? result.photo : defaultDevice}
                    title={result.device_name}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography variant="subtitle1">
                        {result.device_name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Modelo:{" "}
                        <span className={classes.textModelo}>
                          {result.device_model}
                        </span>
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Serial: {result.settings_device.serial}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </>
          )}
        </div>
        {results.length !== 0 ? (
          <div className={classes.loadContainer}>
            <Button className={classes.btnLoad} onClick={handleLoadMore}>
              Load more...
            </Button>
          </div>
        ) : null}
      </div>
    );
}
 
export default Devices;