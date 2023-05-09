import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoadingPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgb(54, 119, 219);
    background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%
  );
`;

export const LoadingText = styled.h1`
    font-size: 5vh;
    color: white;
    cursor: pointer;
`;

export const ProjectsContainer = styled.div`
    background: rgb(54, 119, 219);
    background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 50%,
    rgba(49, 59, 100, 1) 100%);
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    justify-items: center;
    position: absolute;
    display: flex;
    flex-direction: column;
`;

export const ProjectsText = styled.h1`
    position: relative;
    font-size: 7vh;
    top: 5vh;
    color: white;
    text-shadow: 2px 2px grey;
`;

export const ProjectsSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 80vh;
    background-color: transparent;
    position: relative;
    margin-top: 5vh;
    gap: 3vw;
    flex-wrap: wrap;
    align-items: center;
    justify-items: center;
    justify-content: center;
`;

export const ProjectsCard = styled.a`
    height: 30vh;
    width: 30vw;
    background-color: transparent;
    color: white;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    align-items: center;
    justify-items: center;
    border: solid 2px white;
    transition-duration: 0.2s;

    :hover{
        height: 31vh;
        width: 31vw; 
    }

    & > img{
        width: 100%;
        max-height: 100%;
    }

    & > p {
        font-size: 3vh;
        text-align: center;
        background-color: transparent;
        margin-top: 5vh;
        padding: 2px;
    }
`;

export const BackLink = styled(Link)`
    font-size: 4vh;
    position: absolute;
    margin: 2px 2px;
    text-decoration: none;
    left: 0;
    color: white;
`;