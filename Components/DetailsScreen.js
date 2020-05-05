import React ,{Component}from 'react';
import {View,Text,StyleSheet} from 'react-native'
import GlobalStyles from  './GlobalStyles'

export default class DetailsScreen extends Component{
    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>DetailsScreen</Text>
            </View>
        )
    }
}