import React, { Component } from 'react';
import Data from './Data';
import Styled from "styled-components";
import {withRouter} from 'react-router-dom';

const StyledDiv =Styled.div`
width:90vw;
margin:auto;
border: 1px solid black;
padding:10px;
`
const StyledImg = Styled.img`
width:10vw;
height:10vw;
@media screen and (max-width: 600px) {
    width:auto;
   }
`

const Div =Styled.div`
width:100%;
overflow-x:auto;

margin:auto;
@media screen and (max-width: 600px) {
  width:auto;
 }
`


const Button = Styled.button`
margin: 20px 40vw;
padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	color: #fff;
	background-color: #557A95;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
`;
const StyledTable1= Styled.table`
border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
td{
    border: 1px solid #557A95;
    padding: 8px;
    text-align: center;
    font-weight:bold;
    font-weight:20px;
}



th{
    padding: 12px;
  text-align: center;
  background-color: #557A95;
  color: white;
}
`
const StyledTable2= Styled.table`
td{
    border: 1px solid #557A95;
    padding: 8px;
    width:20vw;
    text-align: center;
    font-weight:bold;
    font-weight:20px;
}
margin:auto;

`

const StyledUl= Styled.ul`
list-style-type:none;
`
const OrderHistory = () => {
  let id=0;
    return ( 
        <Data.Consumer>
            {
                (context)=>(
                    <StyledDiv>
              <Div>
              <StyledTable1>
                    <tr>
                      <th>Id</th>
                      <th>Total</th>
                      <th>Products</th>
                      <th>Status</th>
                    </tr>
            {context.Orders.map((product) => {
              if(product.userId===context.User.userId)
              {
                id=id+1;
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{product.grandTotal}</td>
                    <td>{product.ProductNames.map((p)=> <StyledUl><li>{p}</li></StyledUl>)}</td>
                <td>{"Completed"}</td>
                    </tr>
                    )
              }
              
                 
              
              
            })}
            </StyledTable1>
              </Div>
          </StyledDiv>
                )
            }
        </Data.Consumer>
     );
}
 
export default withRouter(OrderHistory);