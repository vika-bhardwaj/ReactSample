import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Footer from './app/footer/Footer';
import Header from './app/header/Header';
import registerServiceWorker from './registerServiceWorker';

render(<Header />, document.getElementById('header'));
render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
