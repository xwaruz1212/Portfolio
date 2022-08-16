import {
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faSass
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import PixiJs from '../../assets/images/Pixi.png'
  import './index.scss'

const Experience = () => {
    return (
        <>
            <div className='page-cont'>
                <h1 className='text'>
                    Experience
                </h1>
                <div className='icons'>
                    <h1 className='one'><FontAwesomeIcon icon={faReact}/></h1>
                    <h1 className='two'><FontAwesomeIcon icon={faJsSquare}/></h1>
                    <h1 className='three'><FontAwesomeIcon icon={faHtml5}/></h1>
                    <br />
                    <h1 className='four'><FontAwesomeIcon icon={faCss3}/></h1>
                    <h1 className='five'><FontAwesomeIcon icon={faSass}/></h1>
                    <h1 className='six'><img src={PixiJs} alt="" /></h1>
                </div>
            
            </div> 
        </>
        
    );
}
 
export default Experience;