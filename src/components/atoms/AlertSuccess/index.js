import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const AlertSuccess = (props) => {
    return (
        <View style={[styles.alert, props.style]}>
            <Text style={{color:'green'}}>{props.title ?? 'Alert'}</Text>
        </View>
    )
}

export default AlertSuccess

const styles = StyleSheet.create({
    alert:{
        width:'100%',
        opacity:0.7,
        padding:15,
        height:undefined,
        borderWidth:1,
        borderColor:'#b4e986',
        borderRadius:10,
        backgroundColor:'#e2f6d0'
    }
})