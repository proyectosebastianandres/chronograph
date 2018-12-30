import React from "react";
import PropTypes from "prop-types";

// Importar componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  registerLink: {
    borderTop: "solid 1px gray",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "center",
  }
});

class RegisterLink extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.registerLink} >
        <Typography
          variant="subheading"
        >
          ¿Aún no tienes cuenta?
        </Typography>
        <Button
          variant="text"
          fullWidth
        >
          Crear cuenta
        </Button>
      </div>
    );
  }
}

RegisterLink.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RegisterLink);
