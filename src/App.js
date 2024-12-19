import PasswordManager from './components/PasswordManager'

import './App.css'

const App = () => (
  <div className="bgcont">
    <img
      className="topLogo"
      alt="app logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
    />
    <PasswordManager />
  </div>
)

export default App
