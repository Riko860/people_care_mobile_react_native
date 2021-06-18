import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Select2 from "react-native-select-two"
import { useDispatch } from 'react-redux'
import { setSelfReport } from '../../../redux'

const Select2Single = (props) => {
    const Dispatch = useDispatch()
    const changeGlobalState = (inputType, value) => {
        Dispatch(setSelfReport(inputType, value))
    }

    return (
        <View style={[styles.select2input, props.style]}>
            <Select2
                isSelectSingle
                style={{borderWidth:0}}
                modalStyle
                colorTheme="green"
                borderRadius="5"
                popupTitle={props.popupTitle ?? 'Popup Title'}
                title={props.title ?? 'Title'}
                data={props.data}
                cancelButtonText="Cancel"
                selectButtonText="Select" 
                searchPlaceHolderText={'Type of accident'}
                listEmptyTitle={'No item available to be choosen'}
                onSelect={data => {
                    changeGlobalState(props.inputType, data)
                }}
            />

            <FontAwesomeIcon icon={ faArrowCircleDown } style={[styles.iconInput, {opacity:0.8}]} size={20} />
        </View> 
    )
}

export default Select2Single

const styles = StyleSheet.create({
    select2input:{
        width:'100%',
        borderWidth:1,
        borderColor:'#666',
        borderRadius:10,
    },
    iconInput:{
        position:'absolute',
        right:0,
        top:12,
        right:10
    }
})