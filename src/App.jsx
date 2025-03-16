import React from 'react'
import ReactDOM from 'react-dom/client';
import './App.css';
import styled from 'styled-components';
import background from './IMG/background.png';
import Time from './Components/Time.jsx';
import Search from './Components/Search.jsx';
import "./Components/compStyles.css";
import { LogInHome } from './Components/Login.jsx';


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

function App() {
  return (
   <BackgroundContainer>
        <LogInHome />
        <Search />
        <Time />    
   </BackgroundContainer>
  );
}



export default App;
