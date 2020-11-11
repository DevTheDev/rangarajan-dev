import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

// Remove these via custom divs
import Box from 'components/box';
import Title from 'components/title';

import './hero.scss';

const Hero = ({ items }) => (
  <div className="hero-main">
    <div className="label">Hi, I&#39;m&nbsp; </div>
    <div className="typed">
      <Typing speed={50}>
        Dev
        <Typing.Backspace count={3} delay={2800} speed={50} />
        <Typing.Speed ms={100} />
        a climate optimist.
        <Typing.Backspace count={19} delay={2800} speed={50} />
        <Typing.Speed ms={100} />
        a digital marketer.
        <Typing.Backspace count={19} delay={2800} speed={50} />
        <Typing.Speed ms={100} />
        a full stack developer.
        <Typing.Backspace count={23} delay={2800} speed={50} />
        <Typing.Speed ms={100} />
        Dev.
      </Typing>
    </div>
  </div>
);

Hero.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
