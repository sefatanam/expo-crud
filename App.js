import "react-native-gesture-handler";
import React from "react";
import SubmitForm from "./Components/SubmitForm";
import DetailsScreen from "./Components/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SubmitStack = createStackNavigator();

const SubmitFormStackScreen = () => (
  <SubmitStack.Navigator initialRouteName="Details">
    <SubmitStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
    <SubmitStack.Screen
      name="SubmitForm"
      component={SubmitForm}
      options={{
        title: "Submit Form",
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
  </SubmitStack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <SubmitFormStackScreen />
    </NavigationContainer>
  );
}


