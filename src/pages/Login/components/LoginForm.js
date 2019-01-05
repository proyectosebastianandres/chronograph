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

const LoginForm = props => {
  const { classes } = props;

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
          id="userEmail"
          type="email"
          variant="outlined"
          fullWidth
          className={classes.textField}
          onChange={props.handleChange}
        />
        <TextField
          label="Contraseña"
          name="password"
          id="userPassword"
          type="password"
          variant="outlined"
          fullWidth
          className={classes.textField}
          onChange={props.handleChange}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={props.handleLogin}
        >
          Ingresar
        </Button>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
