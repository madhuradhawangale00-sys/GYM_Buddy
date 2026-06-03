import React, { useEffect, useState } from 'react'

//component
import WorkoutDetails from '../components/WorkoutDetails';


const Home = () => {

  const [workouts, setWorkout] = useState(null)

  useEffect(()=>{
     const fetchworkouts = async ()=> {
       const response = await fetch('/api/workouts/')
       const json = await response.json()

       if(response.ok){
        setWorkout(json)
       }
     }
     fetchworkouts()
  },[])

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
      </div>
    </div>
  )
}

export default Home
