import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import Data from "./Data";
import { useAlert } from 'react-alert'
var CryptoJS = require("crypto-js");

const Form =Styled.form`
        width: 500px;  
        margin: auto; 
        margin-top:10px;
        margin-bottom:10px;
        padding: 50px;
        border:1px solid black;
        border-radius: 15px ; 
        @media screen and (max-width: 700px) {
          width:auto;
         }
`

const StyledButton =Styled.button`
margin: 0 0 0 40%;
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

`
const formSchema = yup.object().shape({
  firstName: yup.string().required("First Name is Required").min(3),
  lastName: yup.string().required("Last Name is Required").min(3),
  phone:yup.string().matches(/^\d{10}$/,"Phone number must be 10 Digits").required('A phone number is required'),
  email: yup.string().email("Invalid E-mail").required("E-mail is Required"),
  password: yup.string().required("Password is Required").min(8)
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*$/,"Password must contain: 1. A Uppercase Letter   2. A Lowercase Letter   3. A Symbol (!@#\$%\^&\*)    4. A Digit from (0 to 9)   5. Min 8 characters")   ,
  confirmPassword: yup.string().oneOf([yup.ref('password'),''],'Passwords must match').required("Confirm Password is Required")
});

const Registration =() =>{
  const alert = useAlert();
  let history = useHistory();
    return (
  <Data.Consumer>
    {
      (context) =>(
        <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: 0,
          password: "",
          confirmPassword: "",
          address: "",
          description:""
        }}
        validationSchema={formSchema}
        onSubmit={(data) => {
          const {password,confirmPassword,...newData}=data;
          // let Users=context.Users;
        // if(Users.find((u)=> u.email===data.email))
        // {
        //     alert.show("This E-Mail Id already exists");
        //     history.push("/Signup");
        // }
        // else{
          // var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data.password), 'my-secret-key@123').toString();

          // let RegistrationData={...newData,"password":ciphertext}
          
//First User
              let User = [{...data, userId:1}]
        context.setUsers(User);


            // let totalUsers =Users.length;
            // let UserId=totalUsers+1;
            // let User={...RegistrationData, userId:UserId}
            // let allUsers=[...Users,{...User}]
            // context.setUsers(allUsers);
            history.push("/Login");
        //}
          

           // setUser(allUsers)
        //     let allUsers={...Users,...User}
        //  setUser(allUsers)
         
          
          //********************* first user**********************
        
        //   //  setUser(User)
        //  history.push("/Login");
          
       // let User = {...data, userId:1}
          
   

      //  let data = [...data] Object.assign-------check
        }}
      >
        {({ handleSubmit, isValid }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <h2>Create Account</h2>
              <InputField
                label={"First Name"}
                name={"firstName"}
                placeholder={"First Name..."}
              ></InputField>
              <InputField
                label={"Last Name"}
                name={"lastName"}
                placeholder={"Last Name..."}
              ></InputField>
              <InputField
                label={"Phone"}
                name={"phone"}
                placeholder={"Phone Number..."}
                type="tel"
              ></InputField>
              <InputField
                label={"E-Mail"}
                name={"email"}
                placeholder={"Email..."}
              ></InputField>
              <InputField
                label={"Password"}
                name={"password"}
                placeholder={"Password..."}
                type="password"
              ></InputField>
              <InputField
                type="password"
                label={"Confirm Password"}
                name={"confirmPassword"}
                placeholder={"confirm Password..."}
              ></InputField>
               <InputField
                type="text"
                label={"Address"}
                name={"address"}
                placeholder={"Address..."}
              ></InputField>
              <StyledButton type={"submit"} disabled={!isValid}>Submit</StyledButton>
            </Form>
          );
        }}
      </Formik>
      )
    }
  </Data.Consumer>
     
     
    );
  
}

export default Registration;

//for Reference

  /* <label htmlFor="password">Password<span >*</span> :</label>
                  <input 
                  type="password"
                  placeholder={"Password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ></input>
                  {errors.password && touched.password && <p>Password is required</p>} */

