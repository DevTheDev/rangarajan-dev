import React from 'react';
import PropTypes from 'prop-types';

import '../styles/stripe.scss';

const Index = () => (
  <body>
    <div className="block">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="img-wrapper">
      <img
        alt="Heyhey"
        src="https://stripe.com/img/v3/home/app-illustrations/catawiki.svg"
      />
    </div>
    <div className="text">
      <h1>The new standard in online payments</h1>
      <p>
        {' '}
        Stripe is the best software platform for running an internet business.
        We handle billions of dollars every year for forward-thinking businesses
        around the world.
      </p>
    </div>
    <div className="container">
      <div className="cube">
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
      </div>
      <div className="hexa"></div>
    </div>
  </body>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;
