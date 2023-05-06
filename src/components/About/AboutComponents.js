import styled from "styled-components";

export const AboutContainer = styled.div`
  background: rgb(54, 119, 219);
  background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%
  );
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  

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

export const AboutContent = styled.div`
  z-index: 3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5vh;
  gap: 2vh;
`;

export const AboutH1 = styled.div`
  font-size: 10vh;
  color: #fff;
  letter-spacing: 4rem;

  @media screen and (max-width: 768px) {
    letter-spacing: 2px;
  }
`;

export const ImageContainer = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  top: 50vh;
  gap: 4vh;
  align-items: center;
  justify-content: center;

  @media Screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  max-width: 25vw;
  max-height: 70vh;
  border: 1px solid transparent;
  border-radius: 2rem;
  cursor: pointer;
  order: 2;

  @media Screen and (max-width: 768px) {
    max-width: 250px;
    max-height: 120px;
    order: 1;
  }
`;

export const AboutP = styled.p`
  font-size: 2.5vh;
  width: 40vw;
  height: 40vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  order: 1;
  color: white;

  @media Screen and (max-width: 768px) {
    height: 70vh;
    width: 90vw;
    order: 2;
    font-size: 2vh;
    padding-top: 2rem;
    text-align: center;
    justify-content: center;
  }
`;
