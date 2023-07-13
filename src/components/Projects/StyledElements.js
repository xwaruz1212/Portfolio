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