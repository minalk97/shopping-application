import React, { Component } from "react";
import Products from "../ProductData";
import Card from "./Card";
import Styled from "styled-components";
import { keyframes } from "styled-components";

const slider=keyframes`
 
	0% {
		transform: translateX(0%);
	}
	20% {
		 transform: translateX(0%);
	}
	25% {
		transform: translateX(-100%);
		
	}
	45% {
		transform: translateX(-100%);
	}
	50% {
		transform: translateX(-200%);
		
	}
	70% {
		transform: translateX(-200%);
		
	}
	75% {
		transform: translateX(-300%);
		
	}
	95% {
		transform: translateX(-300%);
		
	}
	
	100% {
		transform: translateX(-400%);
		
	}

`

const Img = Styled.img`
border-radius: 5px 5px 0 0;
width: 20rem;
height: 20rem;
`;
const Title = Styled.h2`
color:#557A95;
`;



const Div = Styled.div`  //every card
position: relative;
	 width: 500%;
	// margin: 0;
	left: 0;
	animation: 10s ${slider} infinite;
display:flex;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
 //width:30em;
padding:5px;
 margin:10px;
border: 1px solid #557A95;

@media screen and (max-width: 400px) {
 width:auto;
}
`;

const Container = Styled.div`
padding: 2px 16px;
`;

const StyledDiv = Styled.div`
margin:5px;
color:#557A95;
font-weight:900;
font-size:20px;

`;

const StyledDiv1= Styled.div` //main big div
width:screen.width;
padding:5px;
text-align: center;
display:flex;
flex-direction:row;
overflow:hidden;
border: 1px solid black;
 //width:100rem;
 width:80%;
margin:auto;
@media screen and (max-width: 400px) {
  width:auto;
 }
`
const DivSlider=Styled.div`

width:screen.width;

@media screen and (max-width: 400px) {
	width:auto;
   }
`
const StyledImgDiv=Styled.div`

`
const StyledH1= Styled.h1`
text-align:center;
`
const ret = ()=>{
	document.getElementById("hi").addAttr("style", "background-color:red;");
}
const TopProducts = () => {
  return (
	  <>
	{ret}
    <DivSlider>
		<StyledH1>Top Products</StyledH1>
    <StyledDiv1>
        
      {Products.map((p) => {
         
        return (
            
             <Div>
              <StyledImgDiv>
              <Img src={p.imgUrl} />
              </StyledImgDiv>
            <Container>
               <Title>{p.productName}</Title>
              {/*<Desc>{p.description.substring(0, 250)}</Desc> */}
              <StyledDiv>&#8377; {p.price}</StyledDiv>
            </Container>
          </Div>
          
        );
      })}
      
    </StyledDiv1>
    </DivSlider>


	</>
  );
};

export default TopProducts;
