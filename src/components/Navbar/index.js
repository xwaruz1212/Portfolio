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
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="AboutMe-link" to="/AboutMe">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="Projects-link" to="/Projects">
          <FontAwesomeIcon icon={faComputer} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="ContactMe-link"
          to="/ContactMe"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/kacper-%C5%BCurawski/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#d90429" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/xwaruz1212"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#d90429" />
          </a>
        </li>
      </ul>
        </div>

    );
}
 
export default Navbar;