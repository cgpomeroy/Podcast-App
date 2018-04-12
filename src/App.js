import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';

import Search from "./Containers/Search";
import SearchResults from "./Containers/SearchResults"

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/search-results" component={SearchResults} />
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}


export default App;
