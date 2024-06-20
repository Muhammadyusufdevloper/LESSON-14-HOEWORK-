import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from "./context"

// import App from './App.jsx'
// lazy loading - site yuklash jarayonida loading qo'yib beradi
const App = lazy(()=> import("./App.jsx"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2>Loading...</h2>}> 
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
