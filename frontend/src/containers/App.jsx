import React, { Component } from 'react';

import LoginPage from './home/LoginPage';
import HomePage from './home/HomePage';

const ENDPOINT = process.env.ENDPOINT || '';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

class App extends Component {
  state = { login: true, error: '' }

  handleLogin = async (email, password) => {
    const request = {
      uri: `${ENDPOINT}/login`,
      params: {
        headers,
        method: 'POST',
        body: JSON.stringify({ email, password }),
      },
    };

    const response = await fetch(request.uri, request.params);

    if (response.status >= 200 && response.status < 300) {
      this.setState({ login: false });
      return;
    }

    if (response.status === 401) {
      this.setState({ login: true, error: 'Please check your username or password!' });
    }
  }


  render() {
    const { login, error } = this.state;

    return (
      <div className="uk-flex uk-flex-center uk-flex-middle uk-background-muted uk-height-viewport">
        <div className="uk-width-medium uk-padding-small">
          { login ? <LoginPage error={error} handleLogin={this.handleLogin} /> : <HomePage /> }
        </div>
      </div>
    );
  }
}

export default App;
