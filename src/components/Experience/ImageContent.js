import React from "react";
import styled, { keyframes } from "styled-components";

export const ImageP = styled.img`
  width: 15vw;
  height: 25vh;

  @media screen and (max-width: 768px) {
    width: 30vw;
    height: 15vh;
  }
`;

export const ExperienceP = styled.p`
  font-size: 4vh;
  color: #fff;
  text-align: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 3vh;
  }
`;

export const ArrowLeft = styled.button`
  background: transparent;
  border: none;
  font-size: 8rem;
  position: absolute;
  top: 35vh;
  left: 20vw;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    top: 35vh;
    left: 2vw;
  }
`;

export const ArrowRight = styled.button`
  background: transparent;
  border: none;
  font-size: 8rem;
  position: absolute;
  top: 35vh;
  right: 20vw;
  cursor: pointer;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    top: 35vh;
    right: 2vw;
  }
`;

const fadeIn = keyframes`
  from,
   0%{
    height: 0%;
    width: 0%;
  }

  to, 
  100%{
    height: 100%;
    width: 100%;
  }
`;

const Fade = styled.div`
  width: 80%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => props.active ? fadeIn : false} 3s linear;
  display: ${props => props.active ? 'block' : 'none'};
  animation-duration: 0.5s;
  overflow: hidden;
`;

const ImageContent = ({ technology, text, active }) => {
  return (
    <>
      <Fade active={active}>
        <ImageP src={technology} />
        <ExperienceP>{text}</ExperienceP>
      </Fade>
    </>
  );
};

export default ImageContent;
