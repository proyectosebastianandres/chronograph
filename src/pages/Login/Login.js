import React from "react";
import PropTypes from "prop-types";

// Importar componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Importar componetes personalizados
import Logo from "../../components/Logo";
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
          <LoginForm />
          <RegisterLink />
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
