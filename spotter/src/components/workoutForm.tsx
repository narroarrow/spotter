import React, { useState } from 'react';
import { Button, TextField, Box, Paper } from '@mui/material';



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
            <span className="close" onClick={closeForm}>&times;</span>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />

              <button type="submit">Submit</button>
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