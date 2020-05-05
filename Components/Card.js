import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default Item = (props) => {
  const goForUpdate = () => {
    // console.log({
    //   name: props.name,
    //   age: props.age,
    //   address: props.address,
    //   emailOrPhone: props.emailOrPhone,
    // });
    return [
      {
        name: props.name,
        age: props.age,
        address: props.address,
        emailOrPhone: props.emailOrPhone,
      },
    ];
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.GetItemOnClick}>
        <Text style={styles.item}>Name : {props.name}</Text>
        <Text style={styles.item}>Age : {props.age}</Text>
        <Text style={styles.item}>Address : {props.address}</Text>
        <Text style={styles.item}>Email or Phone : {props.emailOrPhone}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#5200ee",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    color: "white",
    fontSize: 18,
  },
  title: {
    fontSize: 32,
  },
});
