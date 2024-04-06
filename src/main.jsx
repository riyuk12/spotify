import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataLayer } from './components/datalayer/DataLayer.jsx'
import reducer, { initialState } from './components/datalayer/reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <DataLayer 
      initialState={initialState} reducer={reducer}
    >
      <App />
    </DataLayer>
  </>,
)
