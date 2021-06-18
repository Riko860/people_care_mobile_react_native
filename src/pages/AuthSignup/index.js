import { faEye } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonPrimary from '../../components/atoms/ButtonPrimary';
import InputGroup from '../../components/atoms/TextInputGroup';
import AuthHeaderTemplate from '../../components/moleculs/AuthHeaderTemplate';
import { AsyncStorage } from 'react-native';





const AuthSignup = ({navigation}) => {
    const [isSelected,setSelection] = useState(false);
    const RegisterReducer = useSelector((state) => RegisterReducer) // Get Data from Reducer


    const testGetData = async () => {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        alert(user.country)
    }
    return (
        <ScrollView style={styles.mainScrollView}>
            <AuthHeaderTemplate title={'Sign Up'} subtitle={'Sign into Your Account'}/>
            <View style={{flex:1}}>

                {/* Field */}
                <InputGroup style={{marginTop:20}} title={'Full Name'} placeholder={'Full Name'} keyboardType={'default'}/>
                <InputGroup style={{marginTop:20}} title={'NIK'}  placeholder={'NIK'} keyboardType={'numeric'}/>
                <InputGroup style={{marginTop:20}} title={'Birth Date'} placeholder={'Email'} keyboardType={''}/>
                {/* <DatePicker /> */}
                
                
                
                <InputGroup style={{marginTop:20}} title={'Email Address'}  placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup style={{marginTop:20}} password={true} icon={ faEye } title={'Password'}  style={{marginTop:30}} placeholder={'Password'}/>
                <InputGroup style={{marginTop:20}} title={'Phone Number'} placeholder={'Phone Number'} keyboardType={'numeric'}/>
                <InputGroup style={{marginTop:20}} title={'Pronvince'}  placeholder={'Email'} keyboardType={'email-address'}/>
                <InputGroup style={{marginTop:20}} title={'City'} placeholder={'Email'} keyboardType={'email-address'}/>
                
                <View style={styles.boxcontainer}>
                <CheckBox
                    style={styles.checkbox}
                    value={isSelected}
                    onValueChange={setSelection}
                />
                <Text style={styles.textcheck}>I agre all statement in Terms of Services</Text>
                </View>

                {/* Button Sign Up */}
                <ButtonPrimary style={{marginTop:0}} title={'Sign Up'} onPress={() => {testGetData()}}/>


                {/* Already have an Account */}
                <View style={[styles.footer, {marginTop:20, marginBottom:20}]}>
                    <Text>Already have an account?</Text>
                    <Text  onPress={()=>{navigation.navigate('Login')}} style={{color:'blue', marginLeft:2}}>Log in</Text>
                </View>
            </View>
        </ScrollView>
    )
}




export default AuthSignup


const styles = StyleSheet.create({
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
    boxcontainer:{
        flexDirection: "row",
        paddingLeft:8, paddingRight:15,
    },
    checkbox:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
    },
    textcheck:{
        marginTop: 30,
        fontSize: 15,
    },

})

