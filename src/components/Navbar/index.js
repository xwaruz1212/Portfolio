import './index.scss'
import LogoK from '../../assets/images/logoK.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import { faHome, faUser, faEnvelope, faComputer } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (  
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={LogoK} alt="logo" />
            </Link>
            <nav>
        <NavLink 
          exact="true" 
          activeclassname="active" 
          to="/">
          <FontAwesomeIcon icon={faHome} color="#000" />
        </NavLink>
        <NavLink 
          activeclassname="active" 
          className="About-link" 
          to="/About">
          <FontAwesomeIcon icon={faUser} color="#000" />
        </NavLink>
        <NavLink 
          activeclassname="active" 
          className="Experience-link" 
          to="/Experience">
          <FontAwesomeIcon icon={faComputer} color="#000" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="Contact-link"
          to="/Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#000" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kacper-%C5%BCurawski/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#000" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/xwaruz1212"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#000" />
          </a>
        </li>
      </ul>
        </div>

    );
}
 
export default Navbar;