import { useState } from 'react'
import Me2 from '../../assets/images/Me.jpeg'
import Me from '../../assets/images/Me2.png'
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
                        <h2 className='h3'>Hi! My name is Kacper. I am passionate programmer from Poland. <br></br></h2>
                        I started learning programming in 2020. At first it was only a hobby, but this year it became my passion.
                        I had some short episodes with C and C++ and then finally I discovered web development. 
                        I decided that this is the thing that I want to do and even resigned from  law studies, to fully focus on programming. 
                        I learnt almost everything on my own, I had to be disciplined, organized and creative. I also have got wide field of interest outside programming
                        - I got some experience with law, social studies and marketing. In my free time I travel, play football and tenis.
                        <br></br>I am still at the begining, but I learn fast and I believe I could be a real asset in your team. I would be happy to prove that on the interview!
                        
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