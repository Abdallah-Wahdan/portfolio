import React from "react";
import background from '../IMG/background.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


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
const LogInButton = styled.button`
width: 320px;
height: 50px;
font-size: 20px;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;


function LogInHome(){
    const navigate = useNavigate();
    const handelLogInHome = () => {
        navigate('/Login');
}
        return (<LogInButton onClick={handelLogInHome}>Log In</LogInButton>);
    
}

function Login() {
        const navigate = useNavigate();

        const handleLogin = () => {
                navigate('/');
        };

        return (
                <BackgroundContainer className="Login">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <LogInButton onClick={handleLogin}>Log in</LogInButton>
                </BackgroundContainer>
        );
}



export default Login;
export { LogInButton };
export { LogInHome };