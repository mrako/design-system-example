import React, { Component, Fragment } from 'react';

import Footer from '../../components/Footer';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="uk-text-center">Welcome!</h1>

        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
