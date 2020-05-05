import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './textbox.css';

const TextBox = ({ children }) => <Container>{children}</Container>;

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextBox;
