import React ,{Component}from 'react';
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from  './GlobalStyles'

export default class SubmitForm extends Component{
    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>Submit Form</Text>
            </View>
        )
    }
}