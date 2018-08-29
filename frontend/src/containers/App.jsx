import React, { Component } from 'react';

import LoginPage from './home/LoginPage';
import HomePage from './home/HomePage';

class App extends Component {
  state = { login: true }

  handleLogin = () => this.setState({ login: false });

  render() {
    const { login } = this.state;
    return (
      <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport">
        <div className="uk-width-medium uk-padding-small">
          { login ? <LoginPage handleLogin={this.handleLogin} /> : <HomePage /> }
        </div>
      </div>
    );
  }
}

export default App;
