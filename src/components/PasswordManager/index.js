import {Component} from 'react'
import {v4} from 'uuid'

import PasswordCard from '../PasswordsCard'

import './index.css'

const colors = [
  'color1',
  'color2',
  'color3',
  'color4',
  'color5',
  'color6',
  'color7',
  'color8',
]

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    password: '',
    passwordsList: [],
  }

  wsTyping = event => {
    this.setState({website: event.target.value})
  }

  unTyping = event => {
    this.setState({userName: event.target.value})
  }

  pswdTyping = event => {
    this.setState({password: event.target.value})
  }

  submitClicked = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    let randomNum = Math.floor(Math.random() * colors.length)

    if (randomNum > colors.length) {
      randomNum = 0
    }

    const bgcolor = colors[randomNum]

    const newPasswordDetails = {
      id: v4(),
      website,
      userName,
      password,
      bgcolor,
    }

    if (website !== '' && userName !== '' && password !== '') {
      this.setState(prev => ({
        passwordsList: [...prev.passwordsList, newPasswordDetails],
        website: '',
        password: '',
        userName: '',
      }))
    }
  }

  render() {
    const {website, userName, password, passwordsList} = this.state
    return (
      <>
        <div className="card1">
          <div className="imgSmCont">
            <img
              className="smallPm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
          <div className="formCont">
            <form onSubmit={this.submitClicked}>
              <h1 className="heading">Add New Password</h1>
              <div className="inpCont">
                <div className="vertical">
                  <img
                    className="inplogo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                  />
                </div>

                <input
                  value={website}
                  onChange={this.wsTyping}
                  className="inputel"
                  type="text"
                  placeholder="Enter Website"
                />
              </div>
              <div className="inpCont">
                <div className="vertical">
                  <img
                    className="inplogo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                  />
                </div>
                <input
                  value={userName}
                  onChange={this.unTyping}
                  className="inputel"
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
              <div className="inpCont">
                <div className="vertical">
                  <img
                    className="inplogo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                  />
                </div>
                <input
                  value={password}
                  onChange={this.pswdTyping}
                  className="inputel"
                  type="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="btnCont">
                <button className="btn" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="forLargeImage">
            <img
              className="lgpm"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="card2">
          <PasswordCard key={userName} passwordsDetails={passwordsList} />
        </div>
      </>
    )
  }
}

export default PasswordManager
