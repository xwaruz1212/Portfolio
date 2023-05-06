import styled from "styled-components";

export const ContactContainer = styled.div`
  background: rgb(54, 119, 219);
  background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%
  );
  width: 100%;
  height: 112vh;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 20vw;

  @media Screen and (max-width: 768px) {
    flex-direction: column;
    background: rgb(12, 22, 79);
    background: linear-gradient(
      180deg,
      rgba(12, 22, 79, 1) 0%,
      rgba(29, 49, 117, 1) 100%,
      rgba(49, 59, 100, 1) 100%
    );
  }
`;

export const ContactContent = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-top: 5vh;
  gap: 5vh;
  order: 1;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const ContactH1 = styled.h1`
  font-size: 9vh;
  color: #fff;

  @media Screen and (max-width: 768px) {
    font-size: 5vh;
    text-align: center;
    margin-top: 4vh;
  }
`;

export const Icons = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10vw;
`;

export const IconL = styled.a`
  font-size: 14vh;
  transition-duration: 1s;

  :hover{
    font-size: 20vh;
  }

  @media Screen and (max-width: 768px) {
    font-size: 8vh;
  }
`;

export const IconG = styled.a`
  font-size: 14vh;
  transition-duration: 1s;

  :hover{
    font-size: 20vh;
  }

  @media Screen and (max-width: 768px) {
    font-size: 8vh;
  }
`;

export const Footer = styled.footer`
  font-size: 3vh;
  color: black;
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 3;
  gap: 2vh;

  @media Screen and (max-width: 768px) {
    font-size: 2vh;
  }
`;

export const TextP = styled.p`
  font-size: 4vh;
  transition-duration: 1s;

  :hover{
    font-size: 5vh;
  }


  @media Screen and (max-width: 768px) {
    font-size: 2vh;

    :hover{
      font-size: 2vh;
    }
  }
`;

export const CvContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  order: 2;
  z-index: 1;
  align-items: center;
  gap: 2vh;

  @media Screen and (max-width: 768px) {
    margin-top: 0vh;
  }
`;

export const CvH1 = styled.h1`
  font-size: 8vh;
  color: #fff;

  @media Screen and (max-width: 768px) {
    font-size: 5vh;
  }
`;

export const ImgLink = styled.a``;

export const CvImg = styled.img`
  max-height: 65vh;
  max-width: 20vw;
  border: 1px solid transparent;
  border-radius: 0rem 1rem 1rem 0rem;
  transition-duration: 2s;

  :hover {
        max-height: 80vh;
        max-width: 30vw;
        cursor: zoom-in;
        overflow-y: visible;
    }

  @media Screen and (max-width: 768px) {
    max-height: 55vh;
    max-width: 50vw;

    :hover{
      max-height: 55vh;
      max-width: 50vw;
      overflow-y: visible;
    }
  }
`;
