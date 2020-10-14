import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class header extends Component {
    render() {
        return (
            <View style ={styles.header}>
                <Text style={styles.headerText}> EURO CONVERTER </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
header:{
    height:60,
    paddingTop:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1abc9c',
    elevation:50
},
headerText:{
    fontSize:45,
    textAlign:'center',
    fontStyle:'italic',
    fontWeight:'bold',
    
}
})

