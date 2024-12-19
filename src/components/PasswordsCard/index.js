import {Component} from 'react'

import PasswordList from '../passwordsList'

import './index.css'

class PasswordCard extends Component {
  constructor(props) {
    super(props)

    const {passwordsDetails} = props
    this.state = {
      passwordsList: passwordsDetails,
      searchInput: '',
      isChecked: false,
    }
  }

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  checkedToggle = () => {
    this.setState(prev => ({
      isChecked: !prev.isChecked,
    }))
  }

  deleteClicked = id => {
    const {passwordsList} = this.state
    const deletedList = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: deletedList})
  }

  render() {
    const {passwordsList, searchInput, isChecked} = this.state
    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const totalLengthOfPswd = filteredList.length

    return (
      <>
        <div className="passCont">
          <div className="passwordCont">
            <h1 className="passPara">Your Passwords</h1>
            <p className="forlen passPara">{totalLengthOfPswd}</p>
          </div>
          <div className="searchCont">
            <div className="sIcCONT">
              <img
                className="searchIcon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
              />
            </div>
            <input
              onChange={this.searching}
              value={searchInput}
              placeholder="search"
              className="input"
              type="search"
            />
          </div>
        </div>
        <div className="checkCont">
          <input
            id="check"
            onChange={this.checkedToggle}
            className="check"
            type="checkbox"
          />
          <label htmlFor="check" className="pswd">
            Show Passwords
          </label>
        </div>
        {totalLengthOfPswd === 0 && (
          <div className="imgNoPswdCont">
            <img
              className="noPswdImage"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="paraNoPswd">No Passwords</p>
          </div>
        )}
        {totalLengthOfPswd > 0 && (
          <ul className="unordered">
            {filteredList.map(each => (
              <PasswordList
                key={each.id}
                deletePswd={this.deleteClicked}
                checkClicked={isChecked}
                pswdDetails={each}
              />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default PasswordCard
