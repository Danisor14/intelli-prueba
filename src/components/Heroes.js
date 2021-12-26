import React, { useEffect } from "react";
import { Divider, makeStyles, Typography, Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../actions/heroAction";

const useStyles = makeStyles(() => ({
  container: {
    width: "90%",
    padding: 20,
    marginTop: 70,
    marginBottom: 50,
    borderRadius: 10,
    background: "#181721",
  },
  title: {
    marginBottom: 15,
    fontWeight: 600,
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
        <Typography className={classes.title} variant="h5">
          Marvel Heroes
        </Typography>
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
                  <Typography variant="subtitle2" align="center" /* className={classes.heroName} */>
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