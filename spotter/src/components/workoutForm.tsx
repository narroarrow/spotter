import React, { useState } from 'react';
import { Button, Input, Box, Paper, FormControl, FormLabel } from '@mui/material';



const WorkoutForm: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  
  
  return (
    <Box sx={{ p: 4 }}>
    <Button onClick={openForm}>New Workout</Button>

    {isOpen && (
        <Paper elevation={3} className="modal">
          <div className="modal-content">
            {/* <span className="close" onClick={closeForm}></span> */}
            <Button onClick={closeForm}>&times;</Button>
            <form>

              <FormControl margin="normal">
                <FormLabel>Workout Name</FormLabel>
                <Input type="text" placeholder="Workout Name" />
              </FormControl>

              <FormControl margin="normal">
                <FormLabel>Exercise</FormLabel>
                <Input type="text" placeholder="Workout Type" />
              </FormControl>

              
              
              <Button type="submit">Save</Button>

              
            </form>
          </div>
        </Paper>
      )}
      
    </Box>
  );
};

export default WorkoutForm;



// interface FormEntry {
//   question: string;
//   value: string;
// }

// const WorkoutForm: React.FC = () => {
//   const [forms, setForms] = useState<FormEntry[]>([{ question: '', value: '' }]);

//   const handleAddForm = () => {
//     setForms((prevForms) => [...prevForms, { question: '', value: '' }]);
//   };

//   const handleChange = (
//     index: number,
//     field: keyof FormEntry,
//     newValue: string
//   ) => {
//     setForms((prevForms) =>
//       prevForms.map((form, i) =>
//         i === index ? { ...form, [field]: newValue } : form
//       )
//     );
//   };

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h5" gutterBottom>
//         Dynamic Questions Form
//       </Typography>

//       {forms.map((form, index) => (
//         <Box key={index} sx={{ mb: 3, display: 'flex', gap: 2 }}>
//           <TextField
//             label="Question"
//             value={form.question}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleChange(index, 'question', e.target.value)
//             }
//             fullWidth
//           />
//           <TextField
//             label="Value"
//             value={form.value}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               handleChange(index, 'value', e.target.value)
//             }
//             fullWidth
//           />
//         </Box>
//       ))}

//       <Button variant="contained" onClick={handleAddForm}>
//         Add Question
//       </Button>
//     </Box>
//   );
// };

// export default WorkoutForm;