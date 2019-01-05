import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

// Importar componentes de Material UI
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { withStyles } from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
});

const SnackbarComp = props => {
  const { classes, className, variant, open, onClose, message } = props;
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={6000}
    >
      <SnackbarContent
        message={message}
        className={classNames(classes[variant], className)}
      />
    </Snackbar>
  );
}


SnackbarComp.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
}

export default withStyles(styles)(SnackbarComp);
