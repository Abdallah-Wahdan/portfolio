import React from "react";
import { Link } from "react-router-dom";
import background from '../IMG/background.png';
import styled from 'styled-components';
import "./compStyles.css";


const BackgroundContainer = styled.div`
  background-image: url(${background}); 
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function NotFoundPage() {
  return (
    <BackgroundContainer>
      <h1 className="Error">404 Not Found</h1>

      <Link to="/"><button className="HomeButton">Home</button></Link>
      </BackgroundContainer>
  );
}

export default NotFoundPage;