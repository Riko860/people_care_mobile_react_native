import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View , TouchableOpacity, Button} from 'react-native'
import ButtonPrimary from '../../components/atoms/ButtonPrimary'
import InputGroup from '../../components/atoms/TextInputGroup'
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate'
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '../../redux'
import { service } from '../../redux'
import { emailFormat, post } from '../../services'
import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons'
import { AsyncStorage } from 'react-native';
import axios from 'axios'



function NewPassword({ navigation }) {
    const LoginReducer = useSelector((state) => state.LoginReducer) // Get data from Reducer.js
    const [responseAPI, setResponseAPI] = useState()
    const Distpatch = useDispatch()


    const sendData = (email) => {
        var email = LoginReducer.form.email, password = LoginReducer.form.password
        // Send to API Login
        const form_params = {
            email: email,
            password: password,
        }
        axios.post('https://kedeikoko-backend.rrrgho.com/api/login', form_params).then(result => { setResponseAPI(result.data) })
        console.log(responseAPI)
    }

    useEffect(() => {
    }, [responseAPI])

    const displayData = async () => {
        let user = await AsyncStorage.getItem('user')
        let parse = JSON.parse(user)
        alert(parse.name)
    }

    const onInputChange = (value, inputType) => {
        Distpatch(setForm(inputType, value))
    }
    return (
        <ScrollView style={style.mainScrollView}>
            <AuthHeaderTemplate title={'New Password'} subtitle={'Please Enter Your New Password'}/>
            <View style={{ flex: 1 }}>

                {/* Field */}
                <InputGroup value={LoginReducer.form.email} onChangeText={(value) => { onInputChange(value, 'email') } } title={'Email address'} icon={faEnvelope} placeholder={'Email'} keyboardType={'email-address'} />
                <InputGroup password={true} onChangeText={(value)=>{onInputChange(value, 'password')}} title={'Password'} icon={ faEye } style={{marginTop:20}} placeholder={'Password'}/>

                {/* Button Send */}
                <ButtonPrimary title={'Send'} onPress={()=>{navigation.navigate('VerifyEmail')}} />

                {/* Go Back LogIn */}
                <View style={style.footer}>
                    <Text>Go Back To</Text>
                    <Text onPress={()=>{navigation.navigate('Login')}} style={{color:'blue', marginLeft:2}}>Login?</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewPassword

const style = StyleSheet.create({
    mainScrollView:{
        width:'100%',
        backgroundColor:'#fff',
    },
    subtitle:{
        textAlign:'center'
    },
    footer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        marginTop:200,
        flex:1,
    },

})
