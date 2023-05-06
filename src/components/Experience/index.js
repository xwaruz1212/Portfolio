import React, { useState } from "react";
import { technologies, texts, elmCnt } from "./technologies";
import styled from "styled-components";
import ImageContent, { ArrowLeft, ArrowRight, ExperienceP } from "./ImageContent";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";



const ExperienceContainer = styled.div`
  background: rgb(54, 119, 219);
  background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%
  );
  width: 100%;
  height: 112vh;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  

  @media screen and (max-width: 768px) {
    background: rgb(12, 22, 79);
    background: linear-gradient(
      180deg,
      rgba(12, 22, 79, 1) 0%,
      rgba(29, 49, 117, 1) 100%,
      rgba(49, 59, 100, 1) 100%
    );
  }
`;

const ExperienceContent = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 10vh;
`;

const ExperienceH1 = styled.h1`
  text-align: center;
  font-size: 7vh;
  color: #fff;
  letter-spacing: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 7vh;
    letter-spacing: 2px;
  }
`;

const ImageContainer = styled.div`
    width: 40vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        width: 90vw;
        height: 60vh;
    }

`;



const mod = (a, n) => a - n * Math.floor(a / n);

const Skills = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((i) => mod(++i, elmCnt));
  };

  const prevSlide = () => {
    setCurrent((i) => mod(--i, elmCnt));
  };

  return (
    <>
      <ExperienceContainer id="skills">
        <ExperienceContent>
          <ExperienceH1>Skills</ExperienceH1>

          <ImageContainer>

            {
              technologies.map((t, i) =>
                <ImageContent
                  key={i}
                  technology={t}
                  text={texts[current]}
                  active={i === current ? true : false}

                />)
            }

            <ArrowLeft>
              <FaAngleLeft onClick={prevSlide} />
            </ArrowLeft>
            <ArrowRight>
              <FaAngleRight onClick={nextSlide} />
            </ArrowRight>
          </ImageContainer>
        </ExperienceContent>
      </ExperienceContainer>
    </>
  );
};

export default Skills;
