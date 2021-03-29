import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

import './hero.scss';
import face from '../../../content/home/face-true.png';

const Hero = ({ items }) => (
  <>
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
      <img src={face} alt="" draggable="false"></img>
      <ul className="features">
        <li>
          <a href="/now">What am I doing right now?</a>
        </li>
        <li>
          <a href="/help">What I need help with</a>
        </li>
        <li>
          <a href="/ideas">Ideas I Think Are Interesting</a>
        </li>
        <li>
          <a href="/card">How I Work</a>
        </li>
        <li>
          <a href="/assist">How I Can Help You</a>
        </li>
        <li>
          <a href="/content">Top Content Recommendations</a>
        </li>
      </ul>
    </div>
    <div className="projects-arrow">Projects ↓</div>
  </>
);

Hero.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Hero;
