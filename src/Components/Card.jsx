import React, { Component } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";


const Img = Styled.img`
border-radius: 5px 5px 0 0;
width: 10rem;
height: 15rem;
`;
const Title = Styled.h2`
color:#7395AE
`;

const Desc = Styled.p`

word-wrap: break-word;

height:150px;
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
width:25em;
padding:5px;
margin:10px;
border: 1px solid #557A95;
border-radius: 7px;
display:inline-block;
@media screen and (max-width: 400px) {
 width:auto;
}
`;

const Container = Styled.div`
padding: 2px 16px;
`;

const StyledDiv =Styled.div`
margin:5px;
color:#5D5C61;
font-weight:bold;
font-size:20px;
padding-bottom:10px;
`

class Card extends Component {

  viewProduct=(id)=>{

//window.location.href="http://localhost:3000/viewProduct/"+id;
    this.props.history.push(`/viewProduct:${id}`);
  }
  productInfo = () => {};
  render() {
    
    return (
      <div>
        {this.props.data.map((p) => {
          return (
            <Div>
              <Img src={p.imgUrl} />
              <hr />
              <Container>
                <Title >
                  {/* <Link
                    to={{
                      pathname: "/viewProduct/" + p.productId,
                      myCustomProps: p,
                    }}
                  > */}
                    {p.productName}
                  {/* </Link> */}
                </Title>
                <Desc>{p.description.substring(0,250)}</Desc>
                <StyledDiv>&#8377; {p.price}</StyledDiv>
                {/* onClick={()=>this.viewProduct(p.productId)} */}
                <Link to={`/viewProduct/${p.productId}`}><Button key={p.productId}>View Product</Button></Link>
              </Container>
            </Div>
          );
        })}
      </div>
    );
  }
}

export default Card;
