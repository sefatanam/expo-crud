import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";
import Card from "./Card";
import { Button } from "react-native-paper";

export default DetailsScreen = ({ navigation }) => {
  const onGoBackHandler = () => {
    return navigation.navigate("SubmitForm");
  };

  const GetItemDetails = (obj) => {
    console.log(obj);
    return navigation.navigate("SubmitForm",{
      name:obj.name,
      age:obj.age,
      address:obj.address,
      emailOrPhone:obj.emailOrPhone
    });
  };
  const DATA = [
    { id: "1", name: "Sefat", emailOrPhone: "15464", age: 18, address: "A" },
    { id: "2", name: "Rakib", emailOrPhone: "594", age: 19, address: "B" },
    { id: "3", name: "Jamal", emailOrPhone: "7882", age: 20, address: "C" },
    { id: "4", name: "Kamal", emailOrPhone: "98995", age: 45, address: "D" },
    { id: "5", name: "Kasem", emailOrPhone: "11652", age: 89, address: "E" },
    { id: "6", name: "Rakib", emailOrPhone: "594", age: 19, address: "B" },
    { id: "7", name: "Jamal", emailOrPhone: "7882", age: 20, address: "C" },
    { id: "8", name: "Kamal", emailOrPhone: "98995", age: 45, address: "D" },
    { id: "9", name: "Kasem", emailOrPhone: "11652", age: 89, address: "E" },
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
            GetItemOnClick={()=>GetItemDetails(item)}
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
