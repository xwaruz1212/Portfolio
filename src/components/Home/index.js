import './index.scss'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faSass
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PixiJs from '../../assets/images/Pixi.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='Text'>
        homepage
      </div>
      <div className='Left-Side'>
        <h1 className='name'> 
          Kacper Zurawski <br />
          Front-End <br /> Developer <br />
            <Link 
              to="/Contact" 
              className="flat-button">
                CONTACT ME
           </Link>
        </h1>
       
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact}/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare}  />
            </div>
            <div className="face5">
              <img src={PixiJs} alt="" />
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faSass} />
            </div>
          </div>
        </div>
      
    </>
  );
}
 
export default Home;