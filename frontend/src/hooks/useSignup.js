import { useState } from "react";

import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(null);
    const {dispatch} = useAuthContext()

    const signup = async (email, password) => {
        setisLoading(true)
        setError(true)

        const response = await fetch('/api/user/signup', {
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
    return {signup, isLoading, error}
}