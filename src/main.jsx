import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from './store.js'
import { BrowserRouter } from "react-router";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
)

// /* Mobile */
// @media (max-width: 640px)

// /* Tablet */
// @media (min-width: 641px) and (max-width: 1024px)

// /* Desktop */
// @media (min-width: 1025px)
