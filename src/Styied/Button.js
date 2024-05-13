import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background-color:#000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 2px solid transparent;
cursor: pointer;
transition: 0.10s background ease-in;
&:hover {
    background-color: #fefafa;
    color: #000000;
    border: 2px solid #000000;
    transition: 0.10s background ease-in;
}

`;

