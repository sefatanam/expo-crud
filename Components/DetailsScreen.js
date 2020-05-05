import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import Card from "./Card";
import { Button } from "react-native-paper";

export default DetailsScreen = ({ navigation }) => {
  const onGoBackHandler = () => {
    return navigation.navigate("SubmitForm");
  };
  const DATA = [
    { id: "1", name: "Sefat", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "2", name: "Sefat1", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "3", name: "Sefat2", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "4", name: "Sefat3", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "5", name: "Sefat4", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "6", name: "Sefat5", emailOrPhone: "15464", age: 18, address: "A" },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <Button
        style={GlobalStyles.ButtonStyle}
        onPress={() => {
          navigation.navigate('SubmitForm', {
            name:"",
            age:"",
            address:"",
            emailOrPhone:""
          });
        }}
      >
        Go Back To Submit Form
      </Button>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            age={item.age}
            address={item.address}
            emailOrPhone={item.emailOrPhone}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
