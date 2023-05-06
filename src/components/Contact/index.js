import React from 'react'
import { ContactContainer, ContactContent, ContactH1, CvContent, CvH1, CvImg, IconG, IconL, Icons, ImgLink, Footer, TextP } from './ContactElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import CV from '../../images/CV.png'
import CvPdf from '../../documents/CV.pdf'
import { FaMobile, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactContent>
                    <ContactH1>Find me there:</ContactH1>
                    <Icons>
                        <IconL href="https://www.linkedin.com/in/kacper-%C5%BCurawski/"
                            target="_blank"
                            rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} color="#0072b1" />
                        </IconL>
                        <IconG
                            href="https://github.com/xwaruz1212"
                            target="_blank"
                            rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} color="#000" />
                        </IconG>
                    </Icons>
                    <Footer>
                        <TextP><FaRegEnvelope style={{ color: 'black' }} /> kacperzurawski.kz@gmail.com</TextP>
                        <TextP><FaMobile style={{ color: 'black' }} /> +447405699897</TextP>
                        <TextP><FaMobile style={{ color: 'black' }} /> +48535506372</TextP>
                    </Footer>
                </ContactContent>
                <CvContent>
                    <CvH1> Check out my CV:</CvH1>
                    <ImgLink href={CvPdf} target="_blank" rel="noopener noreferrer">
                        <CvImg src={CV} />
                    </ImgLink>

                </CvContent>
            </ContactContainer>
        </>
    );
}

export default Contact;