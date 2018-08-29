import React, { Fragment } from 'react';

import TextField from '../../components/designsystem/TextField';
import Checkbox from '../../components/designsystem/Checkbox';
import Button from '../../components/designsystem/Button';

import Footer from '../../components/Footer';

const LoginPage = (props) => {
  const { handleLogin } = props;

  return (
    <Fragment>
      <legend className="uk-legend">Login</legend>

      <TextField placeholder="Username" name="email" type="text" icon="user" />

      <TextField placeholder="Password" name="password" type="password" icon="lock" />

      <Checkbox value="Keep me logged in" />

      <Button type="submit" value="LOG IN" onClick={handleLogin} primary />

      <Footer />
    </Fragment>
  );
};

export default LoginPage;
