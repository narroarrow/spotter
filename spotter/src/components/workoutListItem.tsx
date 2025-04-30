import { Paper } from "@mui/material";



export default function workoutListItem(props: any) {
  // This is a placeholder for the workout list item component.
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <h1>{props.exerciseName}</h1>
      <p>This is a placeholder for the workout list item component.</p>
    </Paper>
  );
}