import React, { useEffect, useState } from "react";
import { Divider, makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes, getHeroInfo } from "../../actions/heroAction";
import marvel from "../../assets/marvel.png"
import HeroModal from "./HeroModal";
import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles(() => ({
  container: {
    width: "90%",
    padding: 20,
    marginTop: 70,
    marginBottom: 50,
    borderRadius: 10,
    background: "#181721",
  },
  titleContainer: {
      display: "flex",
      alignItems: "flex-end",
      marginBottom: 20
  },
  title: {
    fontFamily: 'Marvel, sans-serif',
    fontWeight: 800,
    color: "#e9e9e9",
  },
  divider: {
    background: "#27253d",
    marginBottom: 10
  },
  resultContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    margin: 10,
    maxWidth: 200
  },
  img: {
      height: 200,
      width: 200,
      objectFit: 'fill',
  },
  marvel: {
      height: 40,
      width: 90,
      marginRight: 8
  }
}));

const Heroes = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const heroes = useSelector(state => state.hero.heroes);
    const offset = useSelector(state => state.hero.offset);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getHeroes());
    },[]);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <img src={marvel} className={classes.marvel} />
          <Typography className={classes.title} variant="h5">
            Heroes
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <InfiniteScroll
          dataLength={heroes.length}
          hasMore={ offset < 1559 } //1559 maximum amount of heroes
          className={classes.resultContainer}
          next={() => dispatch(getHeroes())}
          loader={<CircularProgress color="secondary"/>}
          endMessage={
            <Typography 
              align="center" 
              variant="subtitle2"
              color="secondary"
            >
              Yay! You have seen it all, now you are a Marvel expert
            </Typography>
          }
        >
          {heroes.map((hero) => (
            <Card className={classes.card} key={hero.id}>
              <CardActionArea
                onClick={() => {
                  handleOpen();
                  dispatch(getHeroInfo(hero));
                }}
              >
                <CardMedia
                  component="img"
                  className={classes.img}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
                <CardContent>
                  <Typography variant="subtitle2" align="center">
                    {hero.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </InfiniteScroll>
        <HeroModal open={open} handleClose={handleClose} />
      </div>
    );
}
 
export default Heroes;