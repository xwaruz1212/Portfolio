import React from 'react';
import { AboutContainer, AboutContent, AboutH1, ImageContainer, Img, AboutP } from './AboutComponents';
import Me from '../../images/Me2.jpg'

const About = () => {
    return (
        <>
            <AboutContainer id="about">
                <AboutContent>
                    <AboutH1>About me</AboutH1>
                    <ImageContainer>
                        <AboutP>Hi! My name is Kacper. I am passionate programmer from Poland.
                            I started learning programming in 2019. At first it was only a hobby, but this year it became my passion.
                            I had some short episodes with C and C++ and then finally I discovered web development.
                            I decided that this is the thing that I want to do and even resigned from  law studies, to fully focus on programming.
                            I learnt almost everything on my own, I had to be disciplined, organized and creative. I also have got wide field of interest outside programming
                            - I got some experience with law, social studies and marketing. In my free time I travel, play football and tenis.
                            <br></br>I am still at the begining, but I learn fast and I believe I could be a real asset in your team. I would be happy to prove that on the interview!
                        </AboutP>
                        <Img src={Me} alt="" />
                    </ImageContainer>
                </AboutContent>
            </AboutContainer>
        </>
    );
}

export default About;