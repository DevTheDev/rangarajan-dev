import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUpRight } from 'react-feather';
import { useMixpanel } from 'gatsby-plugin-mixpanel';

import './project.scss';

function Project({ title, subtitle, image, link }) {
  const mixpanel = useMixpanel();
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="blockA"
      onClick={() => mixpanel.track(title)}
    >
      <div className="block-inner">
        <div className="block-text">
          <h2 className="block-title">{title}</h2>
          <p className="block-subtitle">{subtitle}</p>
        </div>
        <div className="block-logo">
          <ArrowUpRight className="block-icon" alt="arrow" />
          <img src={image.publicURL} className="block-img" alt={title} />
        </div>
      </div>
    </a>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.href,
};

export default Project;
