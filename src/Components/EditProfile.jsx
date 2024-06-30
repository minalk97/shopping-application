import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import Styled from "styled-components";
import Data from "./Data";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";

const Form = Styled.form`
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
`;

const StyledButton = Styled.button`
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
`;
const StyledDiv = Styled.div`
margin:15px;
color:red;
`;

const EditProfile = () => {
  const alert = useAlert();
  // const [Users,setUser]= useState(JSON.parse(localStorage.getItem('Users')));
  // useEffect(() => {

  // },[Users])
  const formSchema = yup.object().shape({
    firstName: yup.string().required("First Name is Required").min(3),
    lastName: yup.string().required("Last Name is Required").min(3),
    phone: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 Digits")
      .required("A phone number is required"),
    description: yup.string().max(250),
  });

  return (
    <Data.Consumer>
      {(context) => (
        <Formik
          initialValues={{
            firstName: context.User.firstName,
            lastName: context.User.lastName,
            phone: context.User.phone,
            address: context.User.address,
            description: "",
          }}
          validationSchema={formSchema}
          onSubmit={(data) => {
            let Users = context.Users;
            // let User = { ...data };
            let userToBeUpdated = Users.find(
              (p) => p.email === context.User.email
            );

            let newUsers = Users.filter((u) => u.email != context.User.email);
            let User = { ...userToBeUpdated, ...data };

            let allUsers = [...newUsers, { ...User }];
            let currentUser = allUsers.find((u) => u.email === User.email);
            context.setUsers(allUsers);
            context.setUser(currentUser);
            alert.show("Profile Updated Successfully");
            //newUsers={...User}
            //   let allUsers=[...Users,{...User}]
            //   context.setUsers(allUsers);
            //   history.push("/Login");
            // setUser(allUsers)
            //     let allUsers={...Users,...User}
            //  setUser(allUsers)

            //********************* first user**********************
            //     let User = [{...data, userId:1}]
            // context.setUsers(User);
            //   //  setUser(User)
            //  history.push("/Login");

            // let User = {...data, userId:1}

            //  let data = [...data] Object.assign-------check
          }}
        >
          {({ handleSubmit, isValid, values }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <InputField
                  label={"First Name"}
                  name={"firstName"}
                ></InputField>
                <InputField label={"Last Name"} name={"lastName"}></InputField>
                <InputField
                  label={"Phone"}
                  name={"phone"}
                  type="tel"
                ></InputField>
                <InputField
                  label={"Address"}
                  name={"address"}
                  type="text"
                ></InputField>
                <InputField
                  label={"Description"}
                  name={"description"}
                  type="text"
                  placeholder={"Enter Description here"}
                ></InputField>
                <StyledDiv>
                  {250 - values.description.length >= 0
                    ? `${250 - values.description.length} characters remaining`
                    : ""}
                </StyledDiv>
                <StyledButton type={"submit"} disabled={!isValid}>
                  Submit
                </StyledButton>
              </Form>
            );
          }}
        </Formik>
      )}
    </Data.Consumer>
  );
};

export default withRouter(EditProfile);
