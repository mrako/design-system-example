import React, { Component, Fragment } from 'react';

import TextField from '../../components/designsystem/TextField';
import Checkbox from '../../components/designsystem/Checkbox';
import Button from '../../components/designsystem/Button';
import Alert from '../../components/designsystem/Alert';

import Footer from '../../components/Footer';

class LoginPage extends Component {
  state = { email: '', password: '' }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { error, handleLogin } = this.props;
    const { email, password } = this.state;

    return (
      <Fragment>
        <legend className="uk-legend">Login</legend>

        <Alert text={error} />

        <TextField placeholder="Username" name="email" type="text" icon="user" onChange={this.handleChange} />

        <TextField placeholder="Password" name="password" type="password" icon="lock" onChange={this.handleChange} />

        <Checkbox id="rememberme" value="Keep me logged in" />

        <Button type="submit" value="LOGIN" onClick={() => handleLogin(email, password)} primary />

        <Footer />
      </Fragment>
    );
  }
}

export default LoginPage;
