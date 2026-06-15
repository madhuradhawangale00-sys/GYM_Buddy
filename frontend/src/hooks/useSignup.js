import { useState } from require("react");

import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setisLoading] = useState(null);

    const signup = async (email, password) => {
        setisLoading(true)
        setError(true)

        const reasponse = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        })
    }
}