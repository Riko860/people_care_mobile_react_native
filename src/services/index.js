import { AsyncStorage } from 'react-native';

// Validation Service
export const emailFormat = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (reg.test(email) === false) {
        return false
    }
    return true
}

// Storage PUSH and PULL data
export const getStorage = async (storage) => {
    let data = await AsyncStorage.getItem(storage)
    return data ?? false
}

// Get Auth Data
export const authData = async () => {
    let data = await AsyncStorage.getItem('auth')
    return data ?? false
}