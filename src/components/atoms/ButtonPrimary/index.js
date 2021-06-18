import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme1 from '../ColorPrimary';


const ButtonPrimary = ({title, style, onPress}) => {
    return (
        <View style={styles.buttonPrimaryBox}>
            <TouchableOpacity style={[styles.buttonPrimaryBtn, style]} onPress={onPress}>
                <LinearGradient style={styles.gradientBtn} colors={[theme1.primaryGradient1, theme1.primaryGradient2]}>
                    <Text style={styles.btnText}>{title}</Text>
                </LinearGradient >
            </TouchableOpacity>
        </View>
    )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    buttonPrimaryBox:{
        width:'100%',
        height:50,
        paddingLeft:35,
        paddingRight:35,
        marginTop:30,
    },
    buttonPrimaryBtn:{
        width:'100%',
        flex:1,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8DE570',
    },
    btnText:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        textShadowColor:'#888',
    },
    gradientBtn:{
        width:'100%',
        borderRadius:100,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})