import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';


const TextInputGroup = ({style,styleIcon, ...props}) => {
    const [password, setPassword] = useState(props.password)
    const showPassword = () => {
        if(password == true){
            setPassword(false)
        }else{
            setPassword(true)
        }
    }
    return (
        <View style={[{width:'100%', paddingLeft:15, paddingRight:15, marginTop:props.mt}, style]}>
            <TextInput label={props.title} mode="outlined"
            numberOfLines={props.numberOfLines}
            multiline={props.multiline}
            secureTextEntry={password}
            theme={{ colors: { placeholder: 'grey', background: '#fff', text: 'grey', primary: '#5d5d5d',  },  roundness:props.borderRadius ?? 20}}
            onChangeText={props.onChangeText}
            autoCapitalize="none"
            autoCorrect={false}
            height={props.height}
            
            />
            <View style={[styles.iconInput]}>
                {
                props.icon != null ?
                <FontAwesomeIcon style={styleIcon} size={props.sizeIcon} onPress={()=>{ if(props.password == true ) showPassword() }} icon={ props.icon } />
                :
                <Text></Text>
                }
            </View>
        </View>
        
    )
}

export default TextInputGroup

const styles = StyleSheet.create({
    boxInputGroup:{
        height:50,
        borderWidth:1,
        borderColor:'#999',
        borderRadius:10,
        flex:1,
        marginTop:15,
        position:'relative',
    },
    iconInput:{
        width:50,
        height:50,
        position:'absolute',
        top:10,
        right:20,
        zIndex:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        backgroundColor:'#fff'
    },
})