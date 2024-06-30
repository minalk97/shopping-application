import React, { Component} from "react";
import { Formik} from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import Styled from "styled-components";
import { withAlert} from 'react-alert';
import  Data  from './Data';
var _ = require('lodash');
var CryptoJS = require("crypto-js");


const StyledDiv = Styled.div`
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
  email: yup.string().email("Invalid E-mail").required("E-mail is Required"),
  password: yup.string().required("Password is Required"),
});

class Login extends Component {
  render() {
    const alert = this.props.alert;
   // const User = JSON.parse(localStorage.getItem("Users"));
    return (
      <React.Fragment>
        
      <Data.Consumer>
        { (context) =>(

          <StyledDiv>
           
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(data) => {
           
            
//(m) => m.email === data.email && m.password===data.password)


          let user=_.find(context.Users,{email:data.email})
          // let encryptPassword=user.password;
          // var bytes = CryptoJS.AES.decrypt(encryptPassword, 'my-secret-key@123');
          // var decryptedPassword = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

          // if(decryptedPassword===data.password)
          // {
           
            context.setUser(user);
            context.setIsLoggedIn(true);
            //sessionStorage.setItem("User",JSON.stringify(user));
            this.props.history.push("/AfterLogin");
          // }
            // if (_.find(context.Users,{email:data.email ,decryptedPassword:data.password})) {
              
            // } 
            // else {
            //   alert.show("The username or password you entered is incorrect");
              
            // }


          }}
        >
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <h2>Login</h2>
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
                <StyledButton type={"submit"}>Login</StyledButton>
                
              </form>
            );
          }}
        </Formik>
      </StyledDiv>
      
        )
        }
      </Data.Consumer>
      </React.Fragment>
    );
  }
}

export default withAlert()(Login);
