import { createContext, useReducer } from "react";

// Create Context
export const WorkoutsContext = createContext();

// Reducer Function
export const workoutsReducer = (state, action) => {

    switch(action.type){

        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }

        case 'DELETE_WORKOUT':
            return state

        default:
            return state
    }
}

// Context Provider Component
export const WorkoutsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutsContext.Provider>
    )
}