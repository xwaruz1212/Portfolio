import { useState } from 'react'
import Me from '../../assets/images/Me.jpeg'
import Me2 from '../../assets/images/Me2.jpeg'
import './index.scss'

const About = () => {
const [nextImage, setNextImage] = useState(true);


    return ( 
        <>
            <div className='page-container'>
                <div className="title">
                    <h1>
                        About Me
                    </h1>
                </div> 
                <p className='about-text'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error deserunt, minus voluptatum voluptatibus illum, velit, 
                        obcaecati eaque ipsam tempore harum commodi ducimus. 
                        Porro impedit excepturi veniam officiis, voluptate sint mollitia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error deserunt, minus voluptatum voluptatibus illum, velit, 
                        obcaecati eaque ipsam tempore harum commodi ducimus. 
                        Porro impedit excepturi veniam officiis, voluptate sint mollitia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Error deserunt, minus voluptatum voluptatibus illum, velit, 
                        obcaecati eaque ipsam tempore harum commodi ducimus. 
                        Porro impedit excepturi veniam officiis, voluptate sint mollitia.
                        
                    </p>
                <div className='img-cont'>
                     <button onClick={() => setNextImage(!nextImage)}>  
                        {nextImage ? (
                            <img src={Me} alt="" />
                        ) : (
                            <img src={Me2} alt=""/>
                        )
                        }
                    </button>
                </div>
            </div>
        </>
        
        );
}
 
export default About;