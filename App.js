import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubmitForm from './Components/SubmitForm'
import DetailsScreen from './Components/DetailsScreen'
export default function App() {
  return (
    <View style={styles.container}>
      <SubmitForm/>
      <DetailsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
