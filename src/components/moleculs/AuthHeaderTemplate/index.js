import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AuthHeaderTemplate = (props) => {
    return (
        <>
            <View style={style.headerViewAuth}>
                <Image style={style.topCornerVector} source={require('../../../assets/templates/people_care-corner-vector-template.png')}></Image>
                <View style={style.headerTitleAuth}>
                    <View style={style.headerBarAuth}>
                        {/* <Icon name="question-circle" size={25} color={'#000'} style={{alignSelf: 'flex-end', opacity:0.5, marginRight:20, marginTop:10}}></Icon> */}
                    </View>
                    <View style={style.titleBox}>
                        <View style={style.title}>
                            <Text style={style.titleText}>{props.title}</Text>
                        </View>
                        <View style={style.subTitle}>
                            <Text style={style.subTitleText}>{props.subtitle}</Text>
                        </View>
                    </View >
                </View>
            </View>
        </>
    )
}

export default AuthHeaderTemplate

const style = StyleSheet.create({
    headerViewAuth:{
        height: 350,
        position:'relative',
        backgroundColor:'#fff',
    },
    headerBarAuth:{
        height:100,
        marginTop:10,
        width:'100%',
    },
    topCornerVector:{
        width:'100%',
        height:'130%',
        position:'absolute',
        top:0,
        left:0,
    },
    headerTitleAuth:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
    },
    titleBox:{
        width:'100%',
        flex:1,
    },
    title:{
        width:'100%',
        height:'30%',
        marginTop:120,
    },
    subTitle:{
        flex:1,
    },
    titleText:{
        alignSelf:'center',
        fontSize:40,
        marginTop:20,
        fontStyle:'normal',
    },
    subTitleText:{
        fontSize:20,
        alignSelf:'center',
    }
})