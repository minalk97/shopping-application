import React, { Component } from "react";
import Counter from "./Counter";
import Styled from "styled-components";
import Products from "../ProductData";
import Data from "./Data";
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
	background-color:  #7395AE;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    font-weight:bold;
    font-size:20px;
`;
const StyledTable1= Styled.table`
border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #557A95;
td{
    border: 1px solid #557A95;
    padding: 8px;
    text-align: center;
    color:#557A95;
    font-weight:bold;
    font-size:20px;
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
    color:#557A95;
    text-align: center;
    font-weight:bold;
    font-size:20px;
}
margin:auto;

`
const ButtonDisabled =Styled.button`
margin: 20px 40vw;
padding: 1.5em 3.1em;
color: #fff;
	background-color:  #7395AE;
	border: none;
	border-radius: 7px;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: not-allowed;
    font-weight:bold;
    font-size:20px;
`

class ViewCart extends Component {
  constructor(props,context) {
    super(props,context);
    // let totalPrice=0;
    // this.context.Cart.map((product) => {
    //   totalPrice= totalPrice + (product.price * product.quantity)
    //               })
    //               this.context.setTotal(totalPrice)
    //               this.context.setTax ((totalPrice * 5) / 100) 
    //                this.context.setGrandtotal( totalPrice + this.context.Tax)


    // this.total = 0;
    // this.context.Cart.map((p) => {
    //   this.total = this.total + p.price * p.quantity;
    // });
    // this.tax = (this.total * 5) / 100;
    // this.grandTotal = this.total + this.tax;
 //  this.updateTotal();
    // if (this.fetchUsers()) {
    //   this.state = {
    //     Cart: this.fetchUsers(),
    //   };
    // } else {
    //   this.state = {
    //     Cart: [],
    //   };
    // }
    // this.total = 0;
    // this.state.Cart.map((p) => {
    //   this.total = this.total + p.price * p.quantity;
    // });
    // this.tax = (this.total * 5) / 100;
    // this.grandTotal = this.total + this.tax;

    // let cart = this.fetchUsers();
  }
// updateTotal=()=>
// {
//             this.context.Cart.map((product) => {
//                this.state.totalPrice= this.state.totalPrice + (product.price * product.quantity)
//             })
//             this.context.setTotal(this.state.totalPrice)
//             this.context.setTax ((this.state.totalPrice * 5) / 100) 
//              this.context.setGrandtotal( this.state.totalPrice + this.context.Tax) 
              
            
// }
  // fetchUsers = () => {
  //          return JSON.parse(localStorage.getItem("Cart"));
  // };
  //   // this.timer = setInterval(
  //   //   () =>{
  //   //     this.setState({
  //   //       Cart: this.fetchUsers(),
  //   //     });

  //   //     this.total = 0;
  //   //   this.state.Cart.map((p) => {
  //   //     this.total = this.total + p.price * p.quantity;
  //   //   });
  //   //   this.tax = (this.total * 5) / 100;
  //   //   this.grandTotal = this.total + this.tax;
  //   //   }
  //   //     ,
  //   //   1
  //   // );
   
  onProceed=(context)=>
  {
context.setGrandtotal(this.grandTotal)
context.setTotal(this.total)
context.setTax(this.tax)
    this.props.history.push("/AddAddress")

  };
  handleIncrement = (Id,context) => {
    context.addToCart(Id)
  

    // this.total = 0;
    // this.context.Cart.map((p) => {
    //   this.total = this.total + p.price * p.quantity;
    // });
    // this.tax = (this.total * 5) / 100;
    // this.grandTotal = this.total + this.tax;
    // let p = Products.find((p) => p.productId == Id);
    // let name = p.productName;
    // let price = p.price;
    // if (this.state.Cart.length == 0) {
    //   let productId = Id;
    //   let quantity = 0;
    //   let cart = [...this.state.Cart, { productId, quantity, name, price }];
    //   this.setState({
    //     Cart: cart,
    //   });
    //   localStorage.setItem("Cart", JSON.stringify(cart));
    // } else if (this.state.Cart.length > 0) {
    //   if (this.state.Cart.find((p) => p.productId == Id)) {
    //     let product = this.state.Cart.find((p) => p.productId == Id);
    //     let productId = Id;
    //     let quantity = product.quantity + 1;
    //     let newCart = this.state.Cart.filter((p) => p.productId != Id);
    //     let cart = [...newCart, { productId, quantity, name, price }];
    //     this.setState({
    //       Cart: cart,
    //     });
    //     localStorage.setItem("Cart", JSON.stringify(cart));
    //   } else {
    //     let productId = Id;
    //     let quantity = 0;
    //     let index = this.state.Cart.findIndex((p) => p.productId == Id);
    //     let cart = [...this.state.Cart, { productId, quantity, name, price }];
    //     this.setState({
    //       Cart: cart,
    //     });
    //     localStorage.setItem("Cart", JSON.stringify(cart));
    //   }
    // }
  };
 

  handleDecrement = (Id,context) => {
    let p = Products.find((p) => p.productId == Id);
    let name = p.productName;
    let price = p.price;
    let image=p.imgUrl;
    let userId=context.User.userId;
    let product = context.Cart.find((up) =>  up.userId === context.User.userId && up.productId === Id);
  //  let product = context.Cart.find((p) => p.productId == Id);
    let productId = Id;
   if (product.quantity > 1) {
    //   let quantity = product.quantity - 1;
    //   let newCart = context.Cart.filter((p) => p.productId != Id);
    //   let cart = [...newCart, {userId, productId, quantity, name, price }];
    //   // this.setState({
    //   //   Cart: cart,
    //   // });
    //  // localStorage.setItem("Cart", JSON.stringify(cart));
    //  context.setCart(cart);

   
    let quantity = product.quantity - 1;
    var index = context.Cart.findIndex((up) =>  up.userId === context.User.userId && up.productId === Id);
    var pi= context.Cart[index];
    
     for( var i = 0; i <  context.Cart.length; i++){ 
      if ( i === index) { 
        context.Cart.splice(i, 1); 
      }
  }
  let cart=[... context.Cart,{userId, productId, quantity, name, price, image}]
    
   context.setCart(cart);
  // this.props.history.push("/Cart");
    }
    if (product.quantity == 1) {
      this.handleDelete(Id,context);
    }
  };

  handleDelete = (Id,context) => {
   // let cart = context.Cart.filter((p) => p.productId != Id);
    var index = context.Cart.findIndex((up) =>  up.userId === context.User.userId && up.productId === Id);
    var pi= context.Cart[index];
    
     for( var i = 0; i <  context.Cart.length; i++){ 
      if ( i === index) { 
        context.Cart.splice(i, 1); 
      }
  }
  let cart=[...context.Cart]
   context.setCart(cart);
  // this.props.history.push("/Cart");
    // this.setState({
    //   Cart: cart,
    // });
   // localStorage.setItem("Cart", JSON.stringify(cart));
 //  context.setCart(cart);
  };

  render() {
    let flag=false;
    this.total = 0;
    this.context.Cart.map((p) => {
      if(p.userId===this.context.User.userId)
      {
        this.total = this.total + p.price * p.quantity;
      }
      
    });
    this.tax = (this.total * 5) / 100;
    this.grandTotal = this.total + this.tax;
  
    return (
      <Data.Consumer>
        {
           
          (context)=>(
          
           
            <StyledDiv>
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
              if(product.userId===context.User.userId)
              {
                flag=true;
                return (
                  <tr>
                    <td>{product.productId}</td>
                    <td><StyledImg src={product.image}></StyledImg></td>
                    <td>{product.name}</td>
                    <td>
                      <Counter
                        onDecrement={()=>this.handleDecrement(product.productId,context)}
                        onIncrement={() =>
                          this.handleIncrement(product.productId,context)
                        }
                        key={product.productId}
                        onDelete={()=>this.handleDelete(product.productId,context)}
                        product={product}
                      ></Counter>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.price * product.quantity}</td>
                  </tr>);
              }
              
                 
              
              
            })}
            </StyledTable1>
              </Div>

               
            <br/><br/>
            <StyledTable2>
              <tr>
                
                <td>Total</td>
                <td>{this.total}</td>
              </tr>
              <tr>
               
                <td>Tax (5% of total )</td>
                <td>{this.tax}</td>
              </tr>
              <tr>
                
                <td>Grand Total</td>
                <td>{this.grandTotal}</td>
              </tr>
            </StyledTable2>
            {
              flag? <Button onClick={()=>this.onProceed(context)}>Proceed</Button>:<ButtonDisabled disabled>Proceed</ButtonDisabled>
            }
            
            
          </StyledDiv>
          )
        }
      </Data.Consumer>
     
    );
  }
}
ViewCart.contextType = Data;
export default withRouter(ViewCart);
