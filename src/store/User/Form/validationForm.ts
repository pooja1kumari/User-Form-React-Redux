import React from 'react'
import { Iformvaild } from '../../../interface/user/Iformvaild'

const emailValidateExpression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

const validate = (values: Iformvaild) => {
    const errors: any = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } 
    if (!values.lastName) {
        errors.lastName = 'Required'
    } 
    if (!values.mobile_phone) {
        errors.mobile_phone = 'Required'
    } else if ((values.mobile_phone || "").replace(/\ /g, "").length < 11) {
        errors.mobile_phone = 'Invalid phone number, must be 10 digits'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!emailValidateExpression.test(values.email || "")) {
        errors.email = 'Invalid email'
    }
    return errors
}


export default validate