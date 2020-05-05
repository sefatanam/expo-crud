import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { Button } from "react-native-paper";
import { OutlinedTextField } from "react-native-material-textfield";
import { Formik } from "formik";

export default SubmitForm = ({ route, navigation }) => {

  const { name } = route.params;
  const { age } = route.params;
  const { address } = route.params;
  const { emailOrPhone } = route.params;

  const checkingPerameter = () => {
    console.log(name);
   return InitialFormLoadWithData(name,age,address,emailOrPhone);
  };

  const InitialFormLoad = () => (
    <Formik
      initialValues={{
        name: "",
        emailOrPhone: "",
        age: "",
        address: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        return (
          <View style={GlobalStyles.signInContainer}>
            <OutlinedTextField
              label="Your Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <OutlinedTextField
              label="Email or Phone"
              onChangeText={handleChange("emailOrPhone")}
              onBlur={handleBlur("emailOrPhone")}
              value={values.emailOrPhone}
            />
            <OutlinedTextField
              label="Age"
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
              value={values.age}
            />
            <OutlinedTextField
              label="Address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
            />
            <Button
              style={GlobalStyles.ButtonStyle}
              mode="outlined"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        );
      }}
    </Formik>
  );
  
  const InitialFormLoadWithData = (name,age,address,emailOrPhone) => (
    <Formik
      initialValues={{
        name: name,
        emailOrPhone: emailOrPhone,
        age: age,
        address: address,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        return (
          <View style={GlobalStyles.signInContainer}>
            <OutlinedTextField
              label="Your Name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <OutlinedTextField
              label="Email or Phone"
              onChangeText={handleChange("emailOrPhone")}
              onBlur={handleBlur("emailOrPhone")}
              value={values.emailOrPhone}
            />
            <OutlinedTextField
              label="Age"
              onChangeText={handleChange("age")}
              onBlur={handleBlur("age")}
              value={values.age}
            />
            <OutlinedTextField
              label="Address"
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
            />
            <Button
              style={GlobalStyles.ButtonStyle}
              mode="outlined"
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </View>
        );
      }}
    </Formik>
  );
  
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textStyles}>Submit Form</Text>
      {checkingPerameter()}
      <Button
        style={GlobalStyles.ButtonStyle}
        onPress={() => navigation.goBack()}
      >
        Go Back To Details
      </Button>
    </View>
  );
};
