import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React from 'react';

export default function GlobalStyles({ children }) {
    return React.Children.only(children);
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
