import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Item = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Name : {props.name}</Text>
      <Text style={styles.item}>Age : {props.age}</Text>
      <Text style={styles.item}>Address : {props.address}</Text>
      <Text style={styles.item}>Email or Phone : {props.emailOrPhone}</Text> 
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
      color:'white',
      fontSize:18,
      
  },
  title: {
    fontSize: 32,
  },
});
