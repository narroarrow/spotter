import React, { useState } from 'react';

const InputField: React.FC<{
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}> = ({ label, type, value, onChange, placeholder }) => {
    return (
        <div style={styles.inputGroup}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                style={styles.input}
                placeholder={placeholder}
            />
        </div>
    );
};

const WorkoutFormExercise: React.FC = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ exerciseName, sets, reps });
        // Add logic to handle form submission
    };

    return (
        <div style={styles.card}>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Exercise Name"
                    type="text"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    placeholder="Enter exercise name"
                />
                <InputField
                    label="Sets"
                    type="number"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    placeholder="Enter number of sets"
                />
                <InputField
                    label="Reps"
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    placeholder="Enter number of reps"
                />
                <button type="submit" style={styles.button}>
                    Add Exercise
                </button>
            </form>
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        maxWidth: '400px',
        margin: '16px auto',
    },
    inputGroup: {
        marginBottom: '12px',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginTop: '4px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '10px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default WorkoutFormExercise;