import React from "react";
import PropTypes from "prop-types";

// Componentes Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Componentes personalizados
import PageTitle from "./components/PageTitle";

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  }
});

const PageLayout = props => {
  const { classes } = props;
  return (
    <Grid container className={classes.container}>
      {props.title && <PageTitle title={props.title} action={props.action} />}
      {props.children}
    </Grid>
  );
};

PageLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  action: PropTypes.object,
  children: PropTypes.object.isRequired
}

export default withStyles(styles)(PageLayout);
