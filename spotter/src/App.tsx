import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkoutButton from './components/workoutButton.tsx'
import Button from '@mui/material/Button';
import DynamicForm from './components/workoutForm.tsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
    
      <DynamicForm />
      <Button variant="contained">Add Workout</Button>


      
    </>
  )
}

export default App
