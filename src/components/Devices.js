import React, {useState} from 'react';
import {makeStyles, Grid, Paper, InputBase, IconButton, Divider, Typography, Card, CardMedia, CardContent} from '@material-ui/core'
import SearchIcon from "@material-ui/icons/Search";
import defaultDevice from "../assets/defaultDevice.png";

const results = [
  {
    id_device: 80,
    device_name: "26610288-CJE4VNCKK1-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "89ea94854d657932",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 79,
    device_name: "26610288-YBN4L2YUNK-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "89ea94854d657932",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 78,
    device_name: "766766767-T1QB0ESR1M-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "727782",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 73,
    device_name: "IPHONE",
    id_device_model: 44,
    settings_device: {
      serial: "44219V4NL",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 74,
    device_name: "IPHONE 7S",
    id_device_model: 44,
    settings_device: {
      serial: "44MMV3DU4",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 80,
    device_name: "26610288-CJE4VNCKK1-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "89ea94854d657932",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 79,
    device_name: "26610288-YBN4L2YUNK-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "89ea94854d657932",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 78,
    device_name: "766766767-T1QB0ESR1M-PHONE",
    id_device_model: 44,
    settings_device: {
      serial: "727782",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 73,
    device_name: "IPHONE",
    id_device_model: 44,
    settings_device: {
      serial: "44219V4NL",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
  {
    id_device: 74,
    device_name: "IPHONE 7S",
    id_device_model: 44,
    settings_device: {
      serial: "44MMV3DU4",
      id_structure: 1,
    },
    status: 1,
    device_model: "MYINTELLI PHONE",
    photo: null,
    hasGroups: false,
    entity_group: null,
  },
];

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
    marginBottom: 20
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
  resultContainer: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  root: {
    display: "flex",
    maxWidth: 300,
    margin: 10
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
      textTransform: "lowercase"
  }
}));

const Devices = () => {
    const classes = useStyles();
    const [searchData, setSearchData] = useState("");

    return (
      <div className={classes.container}>
        <div className={classes.searchContainer}>
          <Typography className={classes.title}>Devices</Typography>

          <Paper className={classes.searchPaper}>
            <InputBase
              placeholder="Search Devices by name"
              className={classes.inputBase}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <Divider orientation="vertical" className={classes.searchDivider} />
            <IconButton
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className={classes.resultContainer}>
          {results.map((result) => (
            <Card className={classes.root}>
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
                  <Typography variant="parrafo2" color="textSecondary">
                    Modelo:{" "}
                    <span className={classes.textModelo}>
                      {result.device_model}
                    </span>
                  </Typography>
                  <Typography variant="parrafo2" color="textSecondary">
                    Serial: {result.settings_device.serial}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
}
 
export default Devices;