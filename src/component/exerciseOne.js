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
const ExerciseOne = (props) => {
  const classes = useStyles();
  const [myArr, setMyArr] = useState([]);
  const [resultOne, setResultOne] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setMyArr(value);
  };

  const ejercicio1 = (e) => {
    e.preventDefault();
    var a = ["", "", "", "", ""];
    var aux = Array.from(myArr);
    aux = aux.filter((x) => x > 0);
    aux.forEach((valor) => {
      a[valor - 1] = a[valor - 1] + "*";
    });
    setResultOne(a);
  };
  return (
    <Card>
      <CardHeader
        title={"Ejercicio 1"}
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
            <form onSubmit={ejercicio1}>
              <TextField
                label="Ejercicio 1"
                variant="outlined"
                type="text"
                name="myArr"
                value={myArr}
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
          <Grid container direction="column" justify="flex-start" item>
            {resultOne.map((element, i) => (
              <Grid item xs={12} key={i}>
                <Typography variant="h6" color="textSecondary">
                  {`${i + 1}: ${element}`}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExerciseOne;
