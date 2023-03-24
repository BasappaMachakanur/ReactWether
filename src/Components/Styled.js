import styled from "styled-components";

export const Button = styled.button`
  color:${props=>props.color?props.color:"black"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 10px;
  background-color:${props=>props.value?props.background:"white"};
`;

export const Container = styled.div`
 
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px dotted black;
  border-radius: 3px;
  height:700px;
  width:60vw;
  margin:40px auto;
`;

export const Formcontainer=styled.form`
  margin:40px auto;
  display:flex;
  justify-content:space-evenly;
  width:50%;


`

export const HeaderText=styled.h1`
font-size:${props=>props.size?props.size:"2rem"};
text-align:center;
`


export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  border-top: none;
  border-bottom:2px dotted black;
  border-left:none;
  border-right:none;
  border-radius: 3px;
`;

export const Display = styled.div`
 
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 10px;
  height:150px;
  width:90%;
  margin:40px auto;
 
`;

export const Paragraph=styled.p`
   font-size:${props=>props.size?props.size:"1rem"}
   color:black;
   font-weight:500;
   border-bottom:${props=>props.border===null?null:"2px dotted black"};
   display:flex;
   justify-content:space-between;
   padding:5px;
   width:80%;
   

`
export const ParaContainer = styled.div`
 
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 10px;
  height:30%;
  width:90%;
  margin:40px auto;
  display:grid;
  grid-template-columns: repeat(2, 50%);
 
`;


export const Span = styled.span`
  font-weight:500; 
  margin-right:10px;

 
`;


export const Para=styled.p`
   font-size:2rem;
   color:black;
   font-weight:500;
   padding:5px;
   width:80%;
   margin-left:100px;
   margin-top:0;
   

`



