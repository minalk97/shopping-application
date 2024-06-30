import React, { Component } from "react";
import Styled from "styled-components";
import Data from "./Data";
const StyledDiv= Styled.div`
margin:50px;
`
const Button = Styled.button`
margin:7px;
border: none;
	border-radius: 7px;
	color: #fff;
	background-color:  #7395AE;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    text-align:center;
    height: 40px;
    width: 80px;
`;
class Counter extends Component {


//    renderTags = () => {
//     if (this.state.tags.length == 0)
//       return <p>Please Add Products to Cart</p>;

//     return (
//       <ul>
//         {this.state.tags.map((t) => (
//           <li key={t}>{t}</li>
//         ))}
//       </ul>
//     );
//   };

//   handleIncrement =(product)=>{
//       this.setState({
//           count: this.state.count +1
//       })
//   }


  //add product id while incrementing
  


  render() {
   
    return (
      <Data.Consumer>
        {
          (context)=>(
            <React.Fragment>
            <StyledDiv>
        {/* <h4>{this.props.product.productId}</h4>
        <h4>{this.props.product.name}</h4> */}
                {/* {this.renderTags()} */}
                <Button onClick={()=>this.props.onDecrement(this.props.product.productId)}>-</Button>
              <span>{this.props.product.quantity}</span>
              {/* add product id while incrementing */}
              <Button onClick={ ()=>this.props.onIncrement(this.props.product.productId,context)}>+</Button>
              <Button onClick={()=>this.props.onDelete(this.props.product.productId)}>Delete</Button>
            </StyledDiv>
          </React.Fragment>
          )
        }
      </Data.Consumer>
     
    );
  }
}

export default Counter;
