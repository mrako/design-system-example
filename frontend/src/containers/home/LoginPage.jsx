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

  handleSubmit = (event) => {
    const { handleLogin } = this.props;
    const { email, password } = this.state;

    handleLogin(email, password);
    event.preventDefault();
  }

  render() {
    const { error } = this.props;

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <legend className="uk-legend">Login</legend>

          <Alert text={error} />

          <TextField placeholder="Username" name="email" type="text" icon="user" onChange={this.handleChange} />

          <TextField placeholder="Password" name="password" type="password" icon="lock" onChange={this.handleChange} />

          <Checkbox id="rememberme" value="Keep me logged in" />

          <Button danger type="submit" value="LOGIN" />
        </form>

        <Footer />
      </Fragment>
    );
  }
}

export default LoginPage;
