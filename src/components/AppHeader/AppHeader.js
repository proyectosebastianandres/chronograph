import React from "react";
import PropTypes from "prop-types";

// Componentes de material UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

import Logo from "../Logo";

const styles = () => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});

class AppHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Logo className={classes.grow} variant="h6" />
            <div className={classes.grow} />
            <Button color="inherit">
              Dashboard
            </Button>
            <Button color="inherit">
              Proyectos
            </Button>
            <Button color="inherit">
              Salir
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppHeader);
