import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { TodosContextProvider } from './context/TodosContext'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TodosContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TodosContextProvider>
  </BrowserRouter>,
)
