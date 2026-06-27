// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'



//component
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {
  //useState
  // const [workouts, setWorkout] = useState(null)
  
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(()=>{
     const fetchworkouts = async ()=> {
       const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`,{
        headers: {
          'Authorization':`Bearer ${user.token}`
        }
       })
       const json = await response.json()

       if(response.ok){
        //useState
        // setWorkout(json)

        dispatch({type:'SET_WORKOUTS', payload:json})
       }
     }
     if(user){
      fetchworkouts()
     }
  },[dispatch, user])

//key={workout._id}
  return (
    <div>
      <div className='home'>
        <div className='workouts'>
          {
            workouts && workouts.map((workout)=>(
              // <p key={workout._id}>{workout.title}</p>
              <WorkoutDetails key={workout._id} workout={workout}/>
           ))
          }
        </div>
        <WorkoutForm/>
      </div>
    </div>
  )
}

export default Home
