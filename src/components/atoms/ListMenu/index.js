import { faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ListMenu = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={{flexDirection:'row', padding:10, marginTop:10}}>
            <FontAwesomeIcon icon={ props.icon ?? faUserCog } size={23} style={styles.icon}/>
            <Text style={styles.Text}>{props.title ?? 'Title list here'}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        color:'#666'
    },
    Text:{
        color:'#666',
        marginTop:5,
        marginLeft:10
    }
})

export default ListMenu