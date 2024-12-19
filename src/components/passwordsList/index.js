import './index.css'

const PasswordList = props => {
  const {pswdDetails, checkClicked, deletePswd} = props
  const {website, userName, password, id, bgcolor} = pswdDetails

  const delClicked = () => {
    deletePswd(id)
  }

  return (
    <li className="listel">
      <div className="listcard1">
        <h1 className={`logoAlphabet ${bgcolor}`}>
          {website[0].toUpperCase()}
        </h1>
        <div className="detCard">
          <p className="web web1">{website}</p>
          <p className="web">{userName}</p>
          {checkClicked && <p className="pass">{password}</p>}
          {!checkClicked && (
            <img
              className="stars"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          )}
        </div>
      </div>
      <div>
        <button
          data-testid="delete"
          onClick={delClicked}
          className="delBtn"
          type="button"
        >
          <img
            className="delImg"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordList
