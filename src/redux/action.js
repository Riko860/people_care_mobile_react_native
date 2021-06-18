export const setForm = (input, value) => {
    return {
        type: 'SET_FORM',
        inputType: input,
        inputValue: value
    }
}

export const setSelfReport = (input, value) => {
    return {
        type: 'SELF_REPORT',
        inputType: input,
        inputValue: value,
    }
}