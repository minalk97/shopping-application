import React, { Component } from "react";
import Data from "./Data";
import Styled from "styled-components";
import {withRouter, useHistory} from 'react-router-dom';

const StyledH2 = Styled.h2`
text-align:center;
`;

const StyledImg = Styled.img`
width:10vw;
height:10vw;
@media screen and (max-width: 600px) {
    width:auto;
   }

`;

const StyledDiv = Styled.div`
width:90vw;
margin:auto;
border: 1px solid black;
padding:10px;
`;

const Div = Styled.div`
width:100%;
overflow-x:auto;

margin:auto;
@media screen and (max-width: 600px) {
  width:auto;
 }

`;

const StyledTable1 = Styled.table`
border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
td{
    border: 1px solid #7395AE;
    padding: 8px;
    text-align: center;
    font-weight:bold;
    font-weight:20px;
}

th{
    padding: 12px;
  text-align: center;
  background-color: #7395AE;
  color: white;
}
`;
const StyledTable2 = Styled.table`
td{
    border: 1px solid #7395AE;
    padding: 8px;
    width:20vw;
    text-align: center;
    font-weight:bold;
    font-weight:20px;
}

margin:auto;

`;
const StyledButton = Styled.button`
margin: 0 0 0 50%;
border: none;
border-radius: 7px;
color: #fff;
background-color:  #7395AE;
box-shadow: 2px 2px 25px -7px #4c4c4c;
  cursor: pointer;
  text-align:center;
  height: 50px;
  width: 130px;
  font-size:20px;
  font-weight:bold;
`;


const Checkout = () => {
  let history = useHistory();
  return (
    <Data.Consumer>
      {(context) => (
        <StyledDiv>
          <StyledH2>Order Placed Successfully...</StyledH2>
          <Div>
            <StyledTable1>
              <tr>
                <th>Product Id</th>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
              {context.Cart.map((product) => {
                if (product.userId === context.User.userId) {
                  return (
                    <tr>
                      <td>{product.productId}</td>
                      <td>
                        <StyledImg src={product.image}></StyledImg>
                      </td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.price * product.quantity}</td>
                    </tr>
                  );
                }
              })}
            </StyledTable1>
          </Div>

          <StyledTable2>
            <tr>
              <td>Total</td>
              <td>{context.Total}</td>
            </tr>
            <tr>
              <td>Tax (5% of total )</td>
              <td>{context.Tax}</td>
            </tr>
            <tr>
              <td>Grand Total</td>
              <td>{context.GrandTotal}</td>
            </tr>
          </StyledTable2>
          <StyledButton onClick={()=>{let newCart=context.Cart.filter((p)=>p.userId!=context.User.userId);
  context.setCart(newCart); history.push('/')}}>Continue Shopping</StyledButton>
        </StyledDiv>
      )}
      
      
    </Data.Consumer>
  );
};

export default withRouter(Checkout);
