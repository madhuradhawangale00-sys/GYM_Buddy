import { useState } from "react";

import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const login = async (email, password) => {
        setisLoading(true)
        setError(true)

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json();

        if(!response.ok){
            setisLoading(false)
            setError(json.error)

        }
        if(response.ok){
            //save the user to browsers local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update global auth context
            dispatch({type: 'LOGIN', payload:json})

            setisLoading(false)
        }

    }
    return {login, isLoading, error}
}