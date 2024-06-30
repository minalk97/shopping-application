import React from "react";
import Styled from "styled-components";
import Products from "../ProductData";
import Data from "./Data";
import { useAlert } from "react-alert";
var _ = require("lodash");

const Img = Styled.img`
border-radius: 5px 5px 0 0;
width: 20rem;
height: 25rem;
`;

const StyledDiv = Styled.div`
margin:5px;
color:#5D5C61;
font-weight:bold;
font-size:20px;
padding-bottom:10px;
`;

const Title = Styled.h2`
color:#7395AE
`;

const Desc = Styled.p`
height:auto;
`;

const Button = Styled.button`
padding: 1.5em 3.1em;
border: none;
border-radius: 7px;
color: #fff;
// background-color: #ff3f40;
background-color: #7395AE;
#557A95
box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
  font-size:15px;
  font-weight:bold;
`;

const Div = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width:60em;
padding:10px;
height:auto;
 border: 1px solid #557A95;
 border-radius:7px;
// display:block;
display:flex;
flex-direction:row;
 margin:auto;
margin-top:10%;
 text-align:center;
@media screen and (max-width: 700px) {
  width: auto;
  flex-direction:column;
 }
 @media screen and (max-width: 769px) {
  width: auto;
  flex-direction:column;
 }
`;

const StyledContainer1 = Styled.div`

`

const StyledContainer2 = Styled.div`
padding: 2px 16px;
font-size:20px;

`

const ViewProduct = (props) => {
  const alert = useAlert();
  // constructor()
  // {
  //   super()
  //   // if (this.fetchUsers()) {
  //   //   this.state = {
  //   //     Cart: this.fetchUsers(),
  //   //   };
  //   // } else {
  //   //   this.state = {
  //   //     Cart: [],
  //   //   };
  //   // }

  // }

  // fetchUsers = () => {
  //   // this.Users = JSON.parse(localStorage.getItem("Users"));
  //   // return (this.Cart = this.Users.cart);
  //   return(JSON.parse(localStorage.getItem("Cart")));
  // };

  // componentDidUpdate() {
  //   this.timer = setInterval(
  //     () =>
  //       this.setState({
  //         Cart: this.fetchUsers(),
  //       }),
  //     1
  //   );
  // }

  const addToCart = (Id, context) => {
    alert.show("Product added to cart successfully");
    //  Message.success({txt:"Product added to cart successfully"})
    // let lodashP =_.find(Products,(p)=>p.productId == Id)
    context.addToCart(Id);

    // window.location.href="http://localhost:3000/Cart/"+id;
  };

  let productId = props.match.params.id;
  let product = Products.find((p) => p.productId == productId);
  //let product=this.props.location.myCustomProps
  return (
    <Data.Consumer>
      {(context) => (
        <Div>
          <StyledContainer1>
          <Img  src={product.imgUrl} />
          </StyledContainer1>
          <StyledContainer2>
          <Title>{product.productName}</Title>
            <Desc >{product.description}</Desc>
            <StyledDiv>&#8377; {product.price}</StyledDiv>
            <Button key={product.productId} onClick={()=>addToCart(product.productId,context)}>Add To Cart</Button>
          </StyledContainer2>
          {/* <Img  src={product.imgUrl} />
          <hr />
          <Container>
            <Title>{product.productName}</Title>
            <Desc >{product.description}</Desc>
            <StyledDiv>&#8377; {product.price}</StyledDiv>
            <Button key={product.productId} onClick={()=>addToCart(product.productId,context)}>Add To Cart</Button>
          </Container> */}
        </Div>
      )}
    </Data.Consumer>
  );
};

export default ViewProduct;
