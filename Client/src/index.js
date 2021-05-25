import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './assets/index.css'
import { AppContextProvider  } from './context/globalContext'
import Routes  from './config/routes'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
