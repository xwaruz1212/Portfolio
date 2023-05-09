import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkPage } from "react-router-dom";

export const StartContainer = styled.div`
  width: 100%;
  height: 112vh;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  
  background: rgb(54, 119, 219);
  background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%
  );

  @media screen and (max-width: 768px) {
    background: rgb(12, 22, 79);
    background: linear-gradient(
      180deg,
      rgba(12, 22, 79, 1) 0%,
      rgba(29, 49, 117, 1) 100%,
      rgba(49, 59, 100, 1) 100%
    );
    flex-direction: row;
  }
`;
export const StartContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30vh;
  left: 10vw;

  @media Screen and (max-width: 1600px) {
    top: 15vh;
  }
`;

// export const StartBackground = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const StartVideo = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   -o-object-fit: cover;
// `;

export const StartH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: left;
  
  @media Screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StartP = styled.p`
  color: #fff;
  font-size: 3rem;
  z-index: 10;

  @media Screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactLink = styled(LinkScroll)`
    width: 30vw;
    padding: 1rem;
    border: 2px solid black;
    color: black;
    background-color: white;
    border-radius: 3rem;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    align-self: center;
    transition-duration: 2s;
    margin-top: 5vh;

    &:hover {
        background: black;
        color: white;
        width: 15vw;
    }

    @media Screen and (max-width: 768px) {
        width: 70vw;

        &:hover {
            width: 60vw;
        }
      }
`;

export const ProjectPage = styled(LinkPage)`
    width: 30vw;
    padding: 1rem;
    border: 2px solid black;
    color: black;
    text-decoration: none;
    background-color: white;
    border-radius: 3rem;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    align-self: center;
    transition-duration: 2s;
    margin-top: 5vh;

    &:hover {
        background: black;
        color: white;
        width: 15vw;
    }

    @media Screen and (max-width: 768px) {
        width: 70vw;

        &:hover {
            width: 60vw;
        }
      }
`;

export const SpinCube = keyframes`
    from,
    to {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    16% {
    transform: rotateY(-90deg);
    }
    33% {
    transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
    transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
    transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
    transform: rotateX(90deg);
    }
`;

export const StageCubeCont = styled.div`
  width: 20rem;
  height: 20rem;
  top: 40vh;
  position: absolute;
  right: 20%;
  overflow: visible;

  @media Screen and (max-width: 1600px) {
    width: 2rem;
    height: 2rem;
    top: 50vh;
    right: 30vw;
  }

  @media Screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
    top: 60vh;
    right: 35vw;
  }
`;

export const Cubespinner = styled.div`
    animation-name: ${SpinCube};
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-duration: 9s;
    transform-style: preserve-3d;
    transform-origin: 75px 75px 0;
    margin-left: calc(50% - 100px);
    overflow-x: visible;

    @media Screen and (max-width: 768px) {
        transform-origin: 35px 35px 0;
        
    }

    div {
        position: absolute;
        width: 300px;
        height: 300px;
        background: rgb(49,59,100);
        background: linear-gradient(270deg, rgba(49,59,100,1) 0%, rgba(132,161,255,1) 94%);
        text-align: center;
        font-size: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          box-shadow: 0 0 10px 10px #ffffff73;
        }

        @media Screen and (max-width: 768px) {
            width: 150px;
            height: 150px;
            font-size: 75px;
      }
    }
`;

export const Face1 = styled.div`
  transform: translateZ(150px);
  color: #e34c26;

  @media Screen and (max-width: 768px) {
    transform: translateZ(75px);
  }
`;

export const Face2 = styled.div`
  transform: rotateY(90deg) translateZ(150px);

  @media Screen and (max-width: 768px) {
    transform: rotateY(90deg) translateZ(75px);
  }
`;

export const Face3 = styled.div`
  transform: rotateY(90deg) rotateX(90deg) translateZ(150px);
  color: #264de4;

  @media Screen and (max-width: 768px) {
    transform: rotateY(90deg) rotateX(90deg) translateZ(75px);
  }
`;

export const Face4 = styled.div`
  transform: rotateY(180deg) rotateZ(90deg) translateZ(150px);
  color: yellow;

  @media Screen and (max-width: 768px) {
    transform: rotateY(180deg) rotateZ(90deg) translateZ(75px);
  }
`;

export const Face5 = styled.div`
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(150px);

  @media Screen and (max-width: 768px) {
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(75px);
  }
`;

export const Face6 = styled.div`
  transform: rotateX(-90deg) translateZ(150px);
  color: #cd6799;

  @media Screen and (max-width: 768px) {
    transform: rotateX(-90deg) translateZ(75px);
  }
`;
