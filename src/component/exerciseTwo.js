import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    color: theme.palette.grey[900],
    backgroundColor: theme.palette.grey[200],
  },
}));
const ExerciseTwo = (props) => {
  const classes = useStyles();
  const [number, setNumber] = useState([]);
  const [resultTwo, setResultTwo] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setNumber(value);
  };

  const ejercicio2 = (e) => {
    e.preventDefault();
    var result = [];
    if (number !== "0") {
      var array = [];
      for (var i = 0; i < number; i++) {
        for (var j = 0; j < number; j++) {
          if (i === j || i + j === number - 1) {
            array.push("X");
          } else {
            array.push("_");
          }
        }
        result = [...result, array.join("")];
        array = [];
      }
      setResultTwo(result);
    } else {
      setResultTwo([]);
    }
  };

  return (
    <Card>
      <CardHeader
        title={"Ejercicio 2"}
        titleTypographyProps={{ align: "center" }}
        className={classes.cardHeader}
      />
      <CardContent>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <form onSubmit={ejercicio2}>
              <TextField
                label="Ejercicio 2"
                variant="outlined"
                type="number"
                name="number"
                value={number}
                onChange={handleChange}
              />
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
              >
                CALCULAR
              </Button>
            </form>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            item
          >
            {resultTwo.length > 0 ? (
              resultTwo.map((element, i) => (
                <Grid item key={i}>
                  <Typography variant="h6" color="textSecondary">
                    {element}
                  </Typography>
                </Grid>
              ))
            ) : (
              <Grid item>
                <Typography variant="h6" color="textSecondary">
                  ERROR!
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExerciseTwo;
