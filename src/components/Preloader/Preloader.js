// @flow

import * as React from 'react';
import './Preloader.css';

type PreloaderProps = {
  preloaderIsActive: bool
}

const Preloader = ({ preloaderIsActive }: PreloaderProps) => (
  <div className={`preloader ${preloaderIsActive ? 'preloader_show' : 'preloader_hide'}`}>
    <div className="dash uno" />
    <div className="dash dos" />
    <div className="dash tres" />
    <div className="dash cuatro" />
  </div>
);

export default Preloader;
