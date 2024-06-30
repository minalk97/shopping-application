import React, { Component } from "react";
import Styled from "styled-components";
import Data from "./Data";
import { Link } from "react-router-dom";

const StyledHeader = Styled.header`
 display: flex;
 flex-direction: row;
margin-bottom:10px;
// background-color: #ff4d4d;
background-color: #5D5C61;

  width:screen.width;
  color: #f2f2f2;
  padding: 14px 16px;
  font-size: 17px;
  height:auto;
  font-weight:900;
 

  @media screen and (max-width: 700px) {
    flex-direction: column;
   }
`;

const Container1 = Styled.span`
flex:1;
display:flex;
flex-direction:row;

@media screen and (max-width: 700px) {
  flex-direction: column;
 }
`;

const Container2 = Styled.span`

display:flex;
flex-direction:row;
@media screen and (max-width: 700px) {
  flex-direction: column;
  margin:0;
 }
`;

const StyledA = Styled(Link)`
margin:5px;
  color: #f2f2f2;
  text-align: center;
  padding: 25px 16px;
  text-decoration: none;
  font-size: 20px;
 
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

const LoginSignupA = Styled(Link)`
margin:5px;
text-align: center;
color: #f2f2f2;
text-decoration: none;
font-size: 20px;
padding: 30px 16px;

:hover {
  background-color: #ddd;
  color: black;
}
`;

const StyledImg = Styled.img`
border-radius: 5px 5px 0 0;
width: 6rem;
height: 6rem;
@media screen and (max-width: 700px) {
  margin:auto;
 }
margin:auto;
`;

const StyledP =Styled.p`
margin:5px;
text-align: center;
color: #f2f2f2;
text-decoration: none;
font-size: 20px;
padding: 30px 16px;
`

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: JSON.parse(sessionStorage.getItem("User")),
    };
  }

  onLogout = (context) => {
    sessionStorage.clear();
    context.setIsLoggedIn(false);
    this.props.history.push("/");
  };
  render() {
  
    return (
      <Data.Consumer>
        {(context) => (
          <StyledHeader>
            <StyledImg src={"Cart.png"}></StyledImg>
            <Container1>
              <StyledA to="/" exact>
                Home
              </StyledA>
              <StyledA to="/Products">Products</StyledA>
              {/*<StyledA href="#contact">Contact</StyledA>
        <StyledA href="#about">About</StyledA> */}
            </Container1>

            {context.isLoggedIn ? (
              <Container2>
                 {/* <StyledP>Welcome {context.User.firstName} {context.User.lastName}</StyledP> */}
                <LoginSignupA to="/Profile">My Profile</LoginSignupA>
                <LoginSignupA to="/OrderHistory">My Orders</LoginSignupA>
                <LoginSignupA to="/Cart">Cart</LoginSignupA>
                <LoginSignupA
                  to="/Login"
                  onClick={() => this.onLogout(context)}
                >
                  Logout
                </LoginSignupA>
              </Container2>
            ) : (
              <Container2>
                <LoginSignupA to="/Login">Login</LoginSignupA>
                <LoginSignupA to="/Signup">Signup</LoginSignupA>
              </Container2>
            )}
          </StyledHeader>
        )}
      </Data.Consumer>
    );
  }
}

export default Header;
