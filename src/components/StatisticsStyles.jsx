import styled from "@emotion/styled";

export const StatSection = styled.section`
text-align: center;
width: 350px;
border-radius: 4px;
background-color: white;
`;

export const Title = styled.h2`
text-transform: uppercase;
margin: 0;
padding-top:20px;
padding-bottom: 20px; 

font-size: 20px;
font-weight: 500;
color: #473f3f;
`;

export const StatList = styled.ul`
display:flex;
justify-content: spread-around;
align-items: center;


list-style: none;
padding: 0;
margin: 0;
`;

export const StatListItem = styled.li
`display:flex;
flex-direction: column;
justify-content: space-evenly;
width: 80px;
border-top: 1px solid #d9dedf;


`;

export const Label = styled.span`
margin-bottom: 5px;
font-size: 14px;
font-weight: 500;
color: white;
padding-top: 10px;

`;

export const Percentage = styled.span`
font-size: 22px;
font-weight: 500;
color: white;
padding-bottom: 10px;
`;