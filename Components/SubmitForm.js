import React from "react";
import { View, Text } from "react-native";
import GlobalStyles from "./GlobalStyles";
import { Button } from "react-native-paper";
import { OutlinedTextField } from "react-native-material-textfield";
import { Formik } from "formik";

export default SubmitForm = ({route, navigation }) => {
  console.log(route);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.textStyles}>Submit Form</Text>
     
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
      <Button
        style={GlobalStyles.ButtonStyle}
        onPress={() => navigation.push("Details")}
      >
        Go Back To Details
      </Button>
    </View>
  );
};
