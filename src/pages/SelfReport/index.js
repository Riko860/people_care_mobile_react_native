import { faCamera, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions, AsyncStorage,} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AlertSuccess from '../../components/atoms/AlertSuccess'
import Select2Single from '../../components/atoms/Select2Single'
import TextInputGroup from '../../components/atoms/TextInputGroup'
import HeaderHome from '../../components/moleculs/HeaderHome'
import NavigationReport from '../../components/moleculs/NavigationReport'
import { setSelfReport } from '../../redux'
import GetLocation from 'react-native-get-location'
import { useEffect, useState } from 'react/cjs/react.development'
import axios from 'axios'
import { getStorage } from '../../services'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ButtonPrimary from '../../components/atoms/ButtonPrimary'


const SelfReport = ({navigation, initialProps},props) => {
    const [isLocation, setIsLocation] = useState(false)
    const [diseases, setDiseases] = useState([])
    const [province, setProvince] = useState([])
    const [city, setCity] = useState([])
    const SelfReportReducer = useSelector((state) => state.SelfReportReducer)
    const Dispatch = useDispatch()

    // Get Diseases Data
    const getDiseasesData = async () => {
        if(await getStorage('diseases') == false){
            let diseases = await axios.post('http://localhost/PEOPLE_CARE/public/api/deasese-data')
            .then(result => {
                try {
                    AsyncStorage.setItem(
                        'diseases',JSON.stringify(result.data.data)
                    );
                } catch (error) {
                    console.log(error)
                }

                setDiseases(result.data.data)
                console.log(result.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }else{
            let diseases = await getStorage('diseases')
            setDiseases(JSON.parse(diseases))
        }
    }
    // Get Province Data
    const getProvinceData = async () => {
        if(await getStorage('province') == false){
            let province = await axios.post('https://admin-people-care.rrrgho.com/api/territory/province-detail')
            .then(result => {
                try {
                    AsyncStorage.setItem(
                        'province',JSON.stringify(result.data.data)
                    );
                } catch (error) {
                    console.log(error)
                }

                setProvince(result.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }else{
            let province = await getStorage('province')
            setProvince(JSON.parse(province))
        }
    }
    // Get Device Location
    const getLocation = async () => {        
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            Dispatch(setSelfReport('latitude', location.latitude))
            console.log(location.latitude)
        })
        .then(() => {
            setIsLocation(true)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })        
    }
    
    // Redux for this FORM INPUT
    const changeSelfReportGlobalState = (inputType, value) => {
        Dispatch(setSelfReport(inputType,value))
    }

    


    // Execute Get Data
    useEffect(() => {
        if(isLocation === false){
            getLocation()
        }
        getProvinceData()
        getDiseasesData()
    }, [])




      

    return (
        <View style={styles.wrapperHome}>
            <HeaderHome goBack={true} toProfile={()=>{navigation.navigate('NavigationReport')}} />    
            <ScrollView contentContainerStyle={{flexGrow: 1}} style={[styles.container]}>
                <AlertSuccess style={{marginTop:20, marginBottom:-10}} title={'Make a report means agreed with all terms and condition that PEOPLE CARE made, which means PEOPLE CARE is out of responsibleities after client connected with Props'} />
                <View style={styles.container}>
                    <View style={[styles.takepicture, {marginTop:30}]}>
                        <FontAwesomeIcon icon ={faCamera} size={50} color="#666"/>
                    </View>
                    <Select2Single data={diseases} inputType="diseases" title={'Type of diseases'} style={{marginTop:22}} />   
                    <Select2Single data={province} inputType="province" title={'Choose Province'} style={{marginTop:22}} />   
                    <Select2Single data={city} inputType="subdistrict" title={'Choose Sub District'} style={{marginTop:22}} />   
                    <TextInputGroup mt={15} height={100} numberOfLines={100} multiline={true} style={{paddingLeft:0, paddingRight:0, height:100}} borderRadius={10} value={SelfReportReducer.form.information} onChangeText={(value) => {changeSelfReportGlobalState('information', value)}} title={'Information'} placeholder={'Information'} icon={faInfoCircle} styleIcon={styles.iconInput} sizeIcon={20} />
                    <TextInputGroup mt={15} height={100} numberOfLines={100} multiline={true} style={{paddingLeft:0, paddingRight:0, height:100}} borderRadius={10} value={SelfReportReducer.form.information} onChangeText={(value) => {changeSelfReportGlobalState('location', value)}} title={'GR Building, Merlion Park F98 27th floor'} placeholder={'Location'} icon={faMapMarkerAlt} styleIcon={styles.iconInput} sizeIcon={20} />
                </View>
                    <ButtonPrimary  title={ 'Send Report' } onPress={() => { alert('Under developing ')}}/>
                <View style={{width:'100%', height:100, marginTop:60,}}></View>
                
            </ScrollView>   
            <NavigationReport/>    
        </View>
    )
}
export default SelfReport

const styles = StyleSheet.create({
    wrapperHome:{
        position:'relative', 
        backgroundColor:'#fff', 
        paddingLeft:15, 
        paddingRight:15, 
        paddingTop:30, 
        flex:1, 
        height:undefined,
        ...Platform.select({
            android: {
                paddingTop:10
            },
        })
    },
    container:{
        width:'100%',
        position:'relative',
    },
    iconInput:{
        top:-8,
        right:-24,
        opacity:0.8,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 300,
        width: Dimensions.get('window').width,
        backgroundColor:'red'
    },
    takepicture:{
        width:'100%',
        height:100,
        backgroundColor:'#ccc',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ccc',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }

})