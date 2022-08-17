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
                    <div className='one'><FontAwesomeIcon icon={faReact}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            I started learning React framework at the beginning of 2022. So far I have finished React course on Udemy and created a few small projects. 
                            Additionally I created and designed from scratch a website gallery commissioned project with pdf books, which you can check 
                            <a href="https://makislazos.netlify.app/" target="_blank" rel="noopener noreferrer"> here</a>
                        </p>
                    </div>
                    </div>
                    <div className='two'><FontAwesomeIcon icon={faJsSquare}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            My journey with JavaScript began in the November 2021. 
                            At the beginning I was learning JS for hobby, but after some time I've realized that is what I want to do in my life. 
                            I've created some projects in pure JavaScript which You can check at my Github profile 
                            <a href="https://github.com/xwaruz1212" target="_blank" rel="noreferrer"> here</a>
                        </p>
                    </div>
                    </div>
                    <div className='three'><FontAwesomeIcon icon={faHtml5}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            Html is my first experience with coding. 
                            I started getting to know html in secondary school and time to time I've done few basics projects. 
                            When I've started with JavaScript and React I've also started over with Html and extended my basic knowledge. 
                        </p>
                    </div>
                    </div>
                    <br />
                    <div className='four'><FontAwesomeIcon icon={faCss3}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            CSS is stylesheet which I've discovered when I was doing some projects in html and in the end of 2021 I've started over with this technology.
                        </p>
                    </div>
                    </div>
                    <div className='five'><FontAwesomeIcon icon={faSass}/>
                    <div className='overlay'>
                        <p className='p-text'>
                            I found out about sass when I was expanding my knowledge of CSS and since then I am learning and doing some projects to be advanced in that technology. 
                        </p>
                    </div>
                    </div>
                    <div className='six'><img src={PixiJs} alt="" />
                    <div className='overlay'>
                        <p className='p-text'>
                            PixiJs is the first library of JS that I've learned. I've created a basic slot machine game by the beginning of 2022.
                        </p>
                    </div>
                    </div>
                </div>
            
            </div> 
        </>
        
    );
}
 
export default Experience;