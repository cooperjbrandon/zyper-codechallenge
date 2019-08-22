import React, { Component } from 'react';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './Main';


class App extends Component {

    render() {
      return (
        <SnackbarProvider maxSnack={3}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Main />
        </SnackbarProvider>
      );
    }
}

export default App;
