import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonBack = (props) => {
    return (
        <View style={styles.backBox}>
            <TouchableOpacity onPress={props.onPress}>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backBox:{
        width:50,
        height:50,
        backgroundColor:'#fff',
        position:'absolute',
        top:40,
        left:5,
        zIndex:2,
        alignItems:'center',
        justifyContent:'center',
        ...Platform.select({
            android:{
                top:10,
            }
        })
    }
})
export default ButtonBack