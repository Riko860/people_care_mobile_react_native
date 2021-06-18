import React,{Component} from 'react'
import {View, Text, TextInput } from 'react-native'

export default class OTPTextInput extends Component{
    render(){
        return(
            <View style={{flex:1}}>

         
                <View style={{flex:0.6, justifyContent:"space-evenly"}}/>
                    <TextInput style={style.textInput}></TextInput>
            </View>
        )
    }
}

const style = StyleSheet.create({
    textInput:{
        backgroundColor:"#f5f412", 
        fontWeight:"600", 
        alignSelf:"center", 
        justifyContent:"center", 
        padding:10, 
        fontSize:20, 
        height:55, 
        width:"10%", 
        borderRadius:10, 
        borderWidth:0.5, 
        borderColor:"grey"
    }
}
)
