import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInContainer: {
    alignContent: "center",
    width: 350,
  },
  textStyles: {
    fontSize: 25,
    margin: 8,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#6200ee",
  },
  ButtonStyles: {padding:20,margin:5},
});

export default GlobalStyles;
