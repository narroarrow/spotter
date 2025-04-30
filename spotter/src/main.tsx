import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WorkoutListItem from './components/workoutListItem.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <WorkoutListItem exerciseName="test"></WorkoutListItem> */}
    <App />
    {/* Uncomment the line below to use the BottomNav component */}
  {/* <BottomNav /> */}
  </StrictMode>,
)
