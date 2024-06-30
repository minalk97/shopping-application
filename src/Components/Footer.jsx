import React, { Component } from "react";
import Styled from "styled-components";

const StyledFooter = Styled.footer`
background-color: #5D5C61;
bottom:0;
width:100%;
height:auto; 
color: #f2f2f2;
 margin-top:30px;
font-size: 17px;
 padding: 20px;
display:inline-block;
flex-direction:row;
`;


const StyledDiv1 = Styled.div`
margin-top:20px;
margin-right:20px;
display:inline-block;
justify-content:flex-end;
`;

const StyledDiv2 = Styled.div`
margin-top:20px;
margin-right:20px;
display:inline-block;
justify-content:flex-end;
`;

const StyledDiv3 = Styled.div`
margin-top:20px;
margin-right:20px;
display:inline-block;
`;

const StyledImg = Styled.img`
padding:5px;
`;
const TitleDiv = Styled.div`
font-weight:bold;
font-size:20px;
color:black;
padding-bottom:10px;
`;
const CopyrightDiv =Styled.div`
text-align:center;
`
const Container=Styled.div`
 display:inline-block;
 float:right;
 margin-right:20px;
flex-direction:row;
justify-content:flex-end;
`
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <StyledDiv3>
          <TitleDiv>Help</TitleDiv>
          <div>Shipping</div>
          <div>Payment</div>
          <div>FAQ</div>
        </StyledDiv3>
<Container>
        <StyledDiv2>
          <TitleDiv>Connect with us</TitleDiv>
          <StyledImg src={"instagram.png"}></StyledImg>
          <StyledImg src={"whatsapp.png"}></StyledImg>
          <StyledImg src={"facebook.png"}></StyledImg>
          <StyledImg src={"linkedin.png"}></StyledImg>
        </StyledDiv2>

        <StyledDiv1>
          <TitleDiv> Contact Us:</TitleDiv>
         <div> E-Mail: mail@shopping.com</div>
         <div>phone: 8888877777</div> 
        </StyledDiv1>
        </Container>
        <CopyrightDiv>&#169;  2021 Shoppingsite.com </CopyrightDiv>
      </StyledFooter>
    );
  }
}

export default Footer;
