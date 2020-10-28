import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { ArrowUpRight } from 'react-feather';

import './project.scss';

const Project = ({ title, subtitle, image, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="blockA">
    <div className="block-inner">
      <div className="block-text">
        <h2 className="block-title">{title}</h2>
        <p className="block-subtitle">{subtitle}</p>
      </div>
      <div className="block-logo">
        <ArrowUpRight className="block-icon" />
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      </div>
    </div>
  </a>
);

Project.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object.isRequired,
  link: PropTypes.href,
};

export default Project;
