import { faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import React, { useState } from 'react'
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ButtonPrimary from '../../components/atoms/ButtonPrimary'
import InputGroup from '../../components/atoms/TextInputGroup'
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate'
import { setForm } from '../../redux'
import { authData, emailFormat } from '../../services'
import HomePage from '../HomePage'



const AuthLogin = ({navigation}) => {
    const LoginReducer = useSelector((state) => state.LoginReducer) // Get data from Reducer.js
    const Distpatch = useDispatch()

    const [inAction, setInAction] = useState(false)
    const [btnLogin, setBtnLogin] = useState('Login')


    const sendData = async (email)  => {
        var email = LoginReducer.form.email, password = LoginReducer.form.password
        setBtnLogin('Loading...')
        setInAction(true)

        if(emailFormat(email)){
            // Send to API Login
            const form_params = {
                email : email,
                password : password,
            }          
            let api = await axios.post('http://people-care.tubagusofficial.xyz/api/user-login', form_params)
            .then(response => { 
                try {
                    AsyncStorage.setItem(
                        'auth',JSON.stringify(response.data)
                    );
                    setBtnLogin('Login')
                    setInAction(false)
                    navigation.navigate(HomePage)
                } catch (error) {
                    console.log(error)
                }
            })
            .catch(function(error){
                setBtnLogin('Login')
                setInAction(false)
                alert(error.response.data.message)
            })
        }else{
            alert('Email format is not valid !')
            setBtnLogin('Login')
            setInAction(false)
        }
        
    }

    const displayData = async () => {
        // await AsyncStorage.removeItem('auth');
        let response = JSON.parse(await authData())
        response ? console.log(response.data) : console.log('You need to log in ')    
    }

    const onInputChange = (value, inputType) => {
        Distpatch(setForm(inputType,value))
    }
    return (
        <ScrollView style={style.mainScrollView}>
            <AuthHeaderTemplate title={'Sign In'} subtitle={'Sign into Your Account'}/>
            <View style={{flex:1}}>

                {/* Field */}
                <InputGroup value={LoginReducer.form.email} onChangeText={(value)=>{onInputChange(value, 'email')}} title={'Email address'} icon={faEnvelope} placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup password={true} onChangeText={(value)=>{onInputChange(value, 'password')}} title={'Password'} icon={ faEye } style={{marginTop:20}} placeholder={'Password'}/>

                {/* Forgot Account */}
                <View style={style.forgotAccount}>
                    <Text onPress={()=>{displayData()}} style={{textDecorationLine:'underline', color:'#000'}}>Forgot Account?</Text>
                </View>

                {/* Button Sign In */}
                <ButtonPrimary  title={ btnLogin } onPress={() => { if(inAction != true) sendData()}}/>


                {/* Create Account Navigation */}
                <View style={style.footer}>
                    <Text>Don't have account?</Text>
                    <Text onPress={()=>{navigation.navigate('Signup')}} style={{color:'blue', marginLeft:2}}>Create</Text>
                </View>
            </View>
        </ScrollView>
    )
}



export default AuthLogin

const style = StyleSheet.create({
    mainScrollView:{
        width:'100%',
        backgroundColor:'#fff',
    },
    forgotAccount:{
        width:'100%',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        marginTop:200,
        flex:1,
    },

})

