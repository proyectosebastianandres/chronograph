import React, { Fragment } from "react";

// Importar CSS base de Material UI
import CssBaseLine from "@material-ui/core/CssBaseLine";

// Importar rutas de la aplicación
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <CssBaseLine />
        <Routes />
      </Fragment>
    );
  }
}

export default App;
