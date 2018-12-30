import React from "react";
import PropTypes from "prop-types";

// Importar componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  form: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  textField: {
    marginBottom: theme.spacing.unit * 2,
  }
});

class LoginForm extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography
          align="center"
          variant="headline"
        >
          Iniciar sesión
        </Typography>
        <form
          className={classes.form}
        >
          <TextField
            label="Correo"
            name="email"
            id="user-email"
            type="email"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            label="Contraseña"
            name="password"
            id="user-password"
            type="password"
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            fullWidth
          >
            Ingresar
          </Button>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
