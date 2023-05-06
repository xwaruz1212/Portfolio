import React from "react";
import {
  StartContainer,
  StartContent,
  StartH1,
  StartP,
  ContactLink,
  StageCubeCont,
  Cubespinner,
  Face1,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,

} from "./StartComponents";
import {
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PixiJs from "../../images/Pixi.png";
import video from "../../videos/Background_Trim.mp4"

const StartSection = () => {
  return (
    <>
      <StartContainer id="home">
        <StartContent>
          <StartH1>Kacper Żurawski</StartH1>
          <StartP>FRONTEND DEVELOPER</StartP>
          <br />
          <ContactLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={800}
            delay={100}
          >
            {" "}
            Contact Me
          </ContactLink>
        </StartContent>
        <StageCubeCont>
          <Cubespinner>
            <Face1>
              <FontAwesomeIcon icon={faHtml5} />
            </Face1>
            <Face2>
              <FontAwesomeIcon icon={faNodeJs} />
            </Face2>
            <Face3>
              <FontAwesomeIcon icon={faReact} />
            </Face3>
            <Face4>
              <FontAwesomeIcon icon={faJsSquare} />
            </Face4>
            <Face5>
              <img src={PixiJs} alt="" />
            </Face5>
            <Face6>
              <FontAwesomeIcon icon={faSass} />
            </Face6>
          </Cubespinner>
        </StageCubeCont>
      </StartContainer>
    </>
  );
};
export default StartSection;
