import React from "react";

// Componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  pageTitle: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  grow: {
    flexGrow: 1
  }
});

const PageTitle = props => {
  const { classes } = props;
  return (
    <Grid item xs={12}>
      <div className={classes.pageTitle}>
        <div className={classes.grow}>
          <Typography variant="title">{props.title}</Typography>
        </div>
        <div className={classes.grow} />
        {props.action}
      </div>
    </Grid>
  );
};

export default withStyles(styles)(PageTitle);
