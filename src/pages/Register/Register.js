import React from "react";
import PropTypes from "prop-types";

// Importar componentes de Material UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Importar componetes personalizados
import Logo from "../../components/Logo";
import RegisterForm from "./components/RegisterForm";
import LoginLink from "./components/LoginLink";

const styles = () => ({
  container: {
    minHeight: "100vh",
  },
  innerContent: {
    margin: "auto",
    maxWidth: 450,
  }
});

class Register extends React.Component {
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
          <RegisterForm />
          <LoginLink />
        </Grid>
      </Grid>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
