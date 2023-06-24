import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // remove strict mode to remove the error 'unable to find draggable with id: '
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
