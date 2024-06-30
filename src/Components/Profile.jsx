import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import {withRouter} from 'react-router-dom';
const Form = Styled.form`
        width: 500px;  
        margin: auto; 
        margin-top:10px;
        margin-bottom:10px;
        padding: 50px;
        border:1px solid black;
        border-radius: 15px ; 
        @media screen and (max-width: 700px) {
          width: auto;
         }
        
`;

const StyledInput = Styled.input`
width: 20rem;  
height: 30px;  
border: 1px solid #7395AE;  
border-radius:3px;
display:block;
font-size: 20px;
@media screen and (max-width: 700px) {
  width: auto;
 }
`;

const StyledDiv = Styled.div`
padding:10px;
margin:auto;
@media screen and (max-width: 700px) {
  width: auto;
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
    width: 100px;
    font-size:20px;
    font-weight:bold;
`;

const StyledButton1 = Styled.button`
// margin-left:45vw;
margin: 0 0 0 40%;
border: none;
	border-radius: 7px;
	color: #fff;
	background-color:  #7395AE;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    text-align:center;
    height: 40px;
    width: 130px;
    font-size: 20px;
`;
const StyledOuterDiv = Styled.div`
width:auto;
margin:auto;
@media screen and (max-width: 700px) {
  width: auto;
  margin:auto;
 }
`;
const StyledLabel= Styled.label`
margin:2px;
color:#5D5C61;
font-size:20px;
font-weight:bold;
`

const FormDiv= Styled.div`
margin-left: 15%;
@media screen and (max-width: 700px) {
  margin-left: 0;
 }
`
const Profile = () => {
  const [User] = useState(JSON.parse(sessionStorage.getItem("User")));
  let history = useHistory();

  const updateProfile = () => {
    history.push("/EditProfile");
  };

  // const goToOrderHistory = () => {
  //   history.push("/OrderHistory");
  // };

  return (
    <StyledOuterDiv>
      {/* <StyledButton1 onClick={goToOrderHistory}>My Orders</StyledButton1> */}

      <Form>
        <FormDiv>
        <StyledDiv>
          <StyledLabel>First Name :</StyledLabel>
          <StyledInput
            disabled
            label={"First Name"}
            name={"firstName"}
            placeholder={User.firstName}
          ></StyledInput>
        </StyledDiv>

        <StyledDiv>
          <StyledLabel>Last Name :</StyledLabel>
          <StyledInput
            disabled
            label={"Last Name"}
            name={"lastName"}
            placeholder={User.lastName}
          ></StyledInput>
        </StyledDiv>

        <StyledDiv>
          <StyledLabel>Phone Number :</StyledLabel>
          <StyledInput
            disabled
            label={"Phone"}
            name={"phone"}
            placeholder={User.phone}
            type="tel"
          ></StyledInput>
        </StyledDiv>

        <StyledDiv>
          <StyledLabel>E-Mail :</StyledLabel>
          <StyledInput
            disabled
            label={"E-Mail"}
            name={"email"}
            placeholder={User.email}
          ></StyledInput>
        </StyledDiv>

        <StyledDiv>
          <StyledLabel>Address :</StyledLabel>
          <StyledInput
            disabled
            label={"Address"}
            name={"address"}
            placeholder={User.address}
          ></StyledInput>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel>Description :</StyledLabel>
          <StyledInput
            disabled
            label={"Description"}
            name={"description"}
            placeholder={
              User.description
                ? `${User.description}`
                : "Edit to add Description"
            }
          ></StyledInput>
        </StyledDiv>

        <StyledButton onClick={updateProfile}>Edit</StyledButton>
        </FormDiv>
       
      </Form>
    </StyledOuterDiv>
  );
};

export default withRouter(Profile);
