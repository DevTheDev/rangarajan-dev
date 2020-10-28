import React from 'react';
import PropTypes from 'prop-types';
import Project from 'components/projectdock/project';
import './projectdock.scss';

const ProjectDock = ({ items }) => (
  <div className="projects blocks container">
    {items.map((item, i) => (
      <Project {...item} key={i} />
    ))}
    <div className="block-border hide-mobile"></div>
  </div>
);

ProjectDock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectDock;
