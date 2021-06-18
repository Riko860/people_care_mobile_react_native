import { faUserCog, faChartBar, faUserSecret, faHistory, faQuestionCircle, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react/cjs/react.development';
import ButtonBack from '../../components/atoms/ButtonBack';
import theme1 from '../../components/atoms/ColorPrimary';
import ListMenu from '../../components/atoms/ListMenu';
import { authData } from '../../services';

const Profile = ({route, navigation}) => {
    const [authName, setAuthName] = useState('Rian')
    // const { itemId, otherParam } = route.params;

    const displayData = async () => {
        let response = JSON.parse(await authData())
        setAuthName(response.data.name)
    }

    useEffect(() => {
        displayData()
        
    })

    return (
        <>
        <View style={{backgroundColor:'#fff', flex:1, paddingLeft:15, paddingRight:15, position:'relative'}}>
            <ButtonBack onPress={()=>{navigation.goBack()}}/>
            <View style={styles.cardProfile}>
                <LinearGradient colors={[theme1.primaryGradient1, theme1.primaryGradient2]} style={styles.elipseProfile}>
                    <View style={styles.boxProfilePicture}>
                        <FontAwesomeIcon style={{color:'#666'}} icon={faUser} size={40} />
                    </View>
                </LinearGradient>
                <Text style={styles.nameTag}>{authName}  </Text>
            </View>
            <ListMenu onPress={()=>{navigation.goBack()}} title={'Accoun Setting'} icon={ faUserCog } />
            <ListMenu title={'Account Data Analytic'} icon={ faChartBar } />
            <ListMenu title={'Public Privacy'} icon={ faUserSecret } />
            <ListMenu title={'Long Term History'} icon={ faHistory } />
            <ListMenu title={'Help'} icon={ faQuestionCircle } />
            <ListMenu title={'About'} icon={ faInfoCircle } />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardProfile:{
        width:'100%',
        height:300,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    elipseProfile:{
        width:150,
        height:150,
        backgroundColor:'blue',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    boxProfilePicture:{
        width:140,
        height:140,
        backgroundColor:'#fff',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    nameTag:{
        marginTop:20,
        textTransform:'uppercase',
        fontWeight:'bold',
        textAlign:'center',
        color:'#666'
    }
})

export default Profile