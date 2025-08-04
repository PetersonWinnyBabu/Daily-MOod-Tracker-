import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav data-testid="headerContainer" className="header-container">
      <Link data-testid="links" className="links" to="/">
        <h1 data-testid="titleName" className="title-name">
          Daily Mood Tracker
        </h1>
      </Link>
      <div data-testid="optionsContainer" className="options-container">
        <Link data-testid="links" className="links" to="/">
          <h1 data-testid="options" className="options">
            Home
          </h1>
        </Link>
        <Link data-testid="links" className="links" to="/reports">
          <h1 data-testid="options" className="options">
            Reports
          </h1>
        </Link>
        <button
          data-testid="logoutButton"
          className="logout-button"
          type="button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
      <div data-testid="popupContainer" className="popup-container">
        <Popup
          modal
          trigger={
            <GiHamburgerMenu
              data-testid="triggerButton"
              className="trigger-button"
              size="24px"
            />
          }
        >
          {close => (
            <>
              <button
                type="button"
                data-testid="closeButton"
                className="close-Button"
                onClick={() => close()}
              >
                &times;
              </button>
              <div data-testid="popupContent" className="popup-content">
                <Link data-testid="links" className="links" to="/">
                  <h1 data-testid="options" className="options">
                    Home
                  </h1>
                </Link>
                <Link data-testid="links" className="links" to="/reports">
                  <h1 data-testid="options" className="options">
                    Reports
                  </h1>
                </Link>
                <button
                  data-testid="logoutButton"
                  className="logoutButton"
                  type="button"
                  onClick={onLogout}
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </Popup>
      </div>
    </nav>
  )
}

export default withRouter(Header)
