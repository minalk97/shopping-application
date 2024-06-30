import React, { Component } from 'react';
import { useField } from 'formik';
import Styled from "styled-components";

const StyledInput =Styled.input`
width:100%;  
height: 40px;  
border-radius:5px;
border: 1px solid #7395AE;  
display:block;
margin:5px;
padding:2px;
z-index:1;
font-size:20px;
`

const Div =Styled.div`
padding:10px;
`
const style={
    color:"red"
}

const StyledLabel =Styled.label`
margin:2px;
color:#5D5C61;
font-size:20px;
font-weight:bold;
`
const InputField = ({...props}) => {
    
        const [field,meta]= useField(props.name)
        return ( 
            <Div>
                  <StyledLabel htmlFor={props.name}>{props.label}<span style={style}>*</span> :</StyledLabel>
                  <StyledInput 
                  {...field}
                  {...props}
                  ></StyledInput>
                  {meta.error && meta.touched && <p style={style}>{meta.error}</p>}
              </Div>
         );
    
}
 
export default InputField;