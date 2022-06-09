import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';

import { App } from './App';

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);