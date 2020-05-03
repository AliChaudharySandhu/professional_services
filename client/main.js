import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './assets/css/table.css';

hydrate(<App/>, document.getElementById('root'))
