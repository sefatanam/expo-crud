import "react-native-gesture-handler";
import React from "react";
import SubmitForm from "./Components/SubmitForm";
import DetailsScreen from "./Components/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SubmitFormStackScreen = () => (
  <Stack.Navigator initialRouteName="Details">
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="SubmitForm"
      component={SubmitForm}
      options={{
        title: "Submit Form",
        headerStyle: { backgroundColor: "#6200ee" },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <SubmitFormStackScreen />
    </NavigationContainer>
  );
}


