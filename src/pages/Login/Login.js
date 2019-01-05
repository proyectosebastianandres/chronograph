import React from "react";
import PropTypes from "prop-types";

import Auth from "../../services/Auth";

// Importar componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Importar componetes personalizados
import Logo from "../../components/Logo";
import Snackbar from "../../components/Snackbar";
import LoginForm from "./components/LoginForm";
import RegisterLink from "./components/RegisterLink";

const styles = () => ({
  container: {
    minHeight: "100vh",
  },
  innerContent: {
    margin: "auto",
    maxWidth: 450,
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPassword: '',
      showSnackbar: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  handleLogin = event => {
    event.preventDefault();

    if (Auth.authenticate(this.state.userEmail, this.state.userPassword)) {
      this.props.history.push("/timer");
    } else {
      this.handleOpenSnackbar();
    }
  };

  handleOpenSnackbar = () => {
    this.setState({showSnackbar: true});
  };

  handleCloseSnackbar = () => {
    this.setState({showSnackbar: false});
  };

  render() {
    const { classes } = this.props;
    return(
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid
          item
          className={classes.innerContent}
        >
          <Logo variant="display2" withMargin={16}/>
          <LoginForm handleChange={this.handleChange} handleLogin={this.handleLogin} />
          <RegisterLink />
          <Snackbar
            open={this.state.showSnackbar}
            onClose={this.handleCloseSnackbar}
            message="Correo o Contraseña incorrectos"
            variant="error"
          />
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
