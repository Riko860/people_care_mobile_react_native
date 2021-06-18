import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, View, Text, Image } from 'react-native';
import { faArrowAltCircleLeft, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DummyImage from '../../../assets/images/covid-warning.jpg'

const CardAdds = (props, style) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.card, style]}>
            <View style={styles.cardImageBox}>
                <Image style={{width:undefined, flex:1, height:undefined, borderTopLeftRadius:10, borderTopRightRadius:10}} source={props.image}></Image>
            </View> 
            <View style={styles.cardTitleBox}>
                <Text style={styles.Title}>{props.title}</Text>
                <Text style={styles.TextContent}>
                    {props.content}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:undefined,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity:  0.1,
        shadowRadius: 3,
        elevation: 2,
        marginBottom:5,
        marginTop:20,
    },
    cardImageBox:{
        width:'100%',
        height:200,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    cardTitleBox:{
        width:'100%',
        flex:1,
        backgroundColor:'#fff',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:10,
        paddingBottom:20
    },
    Title:{
        fontWeight:'bold',
        fontSize:18,
        opacity:0.7,
        marginTop:10
    },
    TextContent:{
        marginTop:5,
        opacity:0.5
    }
})

export default CardAdds