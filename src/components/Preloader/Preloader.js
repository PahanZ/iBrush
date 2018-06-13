import React from 'react';
import PropTypes from 'prop-types';
import './Preloader.css';

const Preloader = ({ preloaderIsActive }) => (
  <div className={`preloader ${preloaderIsActive ? 'preloader_show' : 'preloader_hide'}`}>
    <div className="dash uno" />
    <div className="dash dos" />
    <div className="dash tres" />
    <div className="dash cuatro" />
  </div>
);

Preloader.propTypes = {
  preloaderIsActive: PropTypes.bool.isRequired,
};

export default Preloader;
