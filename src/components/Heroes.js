import React, { useEffect } from "react";
import { Divider, makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../actions/heroAction";
import marvel from "../assets/marvel.png"

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
  },
  resultContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    margin: 10
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

    useEffect(() => {
        console.log('kivi');
        dispatch(getHeroes());
    },[]);

    return (
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <img src={marvel} className={classes.marvel} />
          <Typography className={classes.title} variant="h5">
            Heroes
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.resultContainer}>
          {heroes.map((hero) => (
            <Card className={classes.card}>
              <CardActionArea
              /* onClick={() => {
                  setReceta({});
                  setIdBebida(receta.idDrink);
                  handleOpen();
                }} */
              >
                <CardMedia
                  component="img"
                  className={classes.img}
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                />
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    align="center" /* className={classes.heroName} */
                  >
                    {hero.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
    );
}
 
export default Heroes;