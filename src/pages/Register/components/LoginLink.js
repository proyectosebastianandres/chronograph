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

class LoginLink extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.registerLink} >
        <Typography
          variant="subheading"
        >
          ¿Ya tienes una cuenta?
        </Typography>
        <Button
          variant="text"
          fullWidth
        >
          Iniciar sesión
        </Button>
      </div>
    );
  }
}

LoginLink.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LoginLink);
