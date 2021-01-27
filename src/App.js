import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import ExerciseOne from "./component/exerciseOne";
import ExerciseTwo from "./component/exerciseTwo";

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

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Leandro Orieta
            </Typography>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="xl"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Prueba Técnica
          </Typography>
        </Container>
        <Container maxWidth="xl" component="main">
          <Grid container direction="column" spacing={3} alignItems="stretch">
            <Grid item>
              <ExerciseOne />
            </Grid>
            <Grid item>
              <ExerciseTwo />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
