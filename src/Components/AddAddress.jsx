import React from 'react';
import Styled from "styled-components";
import Data from './Data';
import InputField from "./InputField";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router-dom';

const Form = Styled.form`
        width: 500px;  
        margin: auto; 
        margin-top:10px;
        margin-bottom:10px;
        padding: 50px;
        border:1px solid black;
        border-radius: 15px ; 
        @media screen and (max-width: 400px) {
          width:auto;
         }
`;

const StyledButton = Styled.button`
margin: 0 0 0 30%;
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


const AddAddress = () => {
    let history = useHistory();
    return ( 
        <Data.Consumer>
            {
                (context)=>(
                    <Formik
                    initialValues={{
                        address: context.User.address,
                      }}
                      onSubmit={(data) => {
                        let Users = context.Users;

                        //  let User = { ...data };
                         let userToBeUpdated = Users.find((p) => 
                           p.email === context.User.email
                         )
            
                         let newUsers= Users.filter((u)=>
                             u.email !== context.User.email
                         )
                         const {address,...newUserToBeUpdated}=userToBeUpdated;
                         let User={...newUserToBeUpdated,...data}
                         
            let allUsers=[...newUsers,{...User}]
            let currentUser=allUsers.find((u)=>u.email===User.email)
            context.setUsers(allUsers);
            context.setUser(currentUser)

                        
                        let productNames=[];
                        context.Cart.map((p)=>{
                          if(p.userId===context.User.userId)
                          {
                            productNames.push(p.name)
                          }
                        })
                        
                        if(context.Orders){
                          let Orders=[...context.Orders]
                          let orderId=Orders[Orders.length-1].orderId+1;
                          Orders=[...Orders,{orderId:orderId,userId:context.User.userId,grandTotal:context.GrandTotal,ProductNames:[...productNames]}]
                          context.setOrders(Orders)
                          localStorage.setItem("Orders",JSON.stringify(Orders))
                        }
                      //   let Orders=[...context.Orders,{orderId:1,userId:context.User.userId,grandTotal:context.GrandTotal,ProductNames:[...productNames]}]
                      //  context.setOrders(Orders)

                        // localStorage.setItem("Orders",JSON.stringify(Orders))
                        sessionStorage.setItem("address",JSON.stringify(data))
                        // let newCart=context.Cart.filter((p)=>p.userId!=context.User.userId)
                        // context.setCart(newCart);
                        history.push("/Checkout")
                       
                      }}
                    >
                      {({ handleSubmit, isValid }) => {
                        return (
                          <Form onSubmit={handleSubmit}>
                            
                            <InputField
                              label={"Address"}
                              name={"address"}
                              type="text"
                            ></InputField>
                            <StyledButton type={"submit"} disabled={!isValid}>
                              Place Order
                            </StyledButton>
                          </Form>
                        );
                      }}
                    </Formik>
                )
                 
           
                   
               
                        
                  
                   
                
                
            }
        </Data.Consumer>
     
     );
}
 
export default withRouter(AddAddress);