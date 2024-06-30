import React, { Component, useState, useEffect } from "react";
import products from "../ProductData";
import Card from "./Card";
import Styled from "styled-components";


const StyledDiv = Styled.div`
margin:auto;
width:screen.width;
padding:5px;
text-align: center;

@media screen and (max-width: 400px) {
  width:auto;
 }
`;
const Button = Styled.button`
margin:7px;
border: none;
	border-radius: 7px;
  color: #fff;
  font-size:20px;
	background-color:  #7395AE;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    text-align:center;
    height: 40px;
    width: 85px;
`;

const Input = Styled.input`
padding:5px;
height:50px;
border-radius: 7px;
@media screen and (max-width: 400px) {
  width:auto;
 }
`;

const Div = Styled.div`
padding-bottom:5px;
`;
const ProductList = () => {
  var flag = false;
  const [product, getProduct] = useState("");
  const [searchedP, setSearchedP] = useState([]);
  useEffect(() => {
    setSearchedP(products);
    // if(searchedP.length==0)
    // {
    //   flag=true;
    // }
  }, []);

  const showProduct = () => {
    setSearchedP(
      products.filter((n) =>
        n.productName.toLowerCase().includes(product.toLowerCase())
      )
    );
  };

  return (
    <StyledDiv>
    
      <Div>
        <Input
          placeholder={"Search Product"}
          value={product}
          onChange={(e) => getProduct(e.target.value)}
        />
        <Button onClick={showProduct}>Search</Button>
      </Div>
      {flag ? <h2>Product not Found</h2> : <Card data={searchedP}></Card>}
    </StyledDiv>
  );
};

export default ProductList;
