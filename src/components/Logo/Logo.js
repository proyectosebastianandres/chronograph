import React from "react";
import PropTypes from "prop-types";

// Importar componentes de Material UI
import Typography from "@material-ui/core/Typography";

const Logo = props => {
  return (
    <Typography
      variant={props.variant || "display1"}
      align="center"
      style={{marginBottom: props.withMargin}}
    >
      Chronograph
    </Typography>
  );
}

Logo.propTypes = {
  variant: PropTypes.string,
  withMargin: PropTypes.number,
}

export default Logo;
