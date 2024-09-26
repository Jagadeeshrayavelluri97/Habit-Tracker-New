import React, { useState } from 'react';
import HabitList from './components/HabitList';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const App = () => {
  const [habits, setHabits] = useState([]);
  const [habitInput, setHabitInput] = useState('');

  const addHabit = (e) => {
    e.preventDefault();
    if (habitInput) {
      setHabits([...habits, { id: uuid(), name: habitInput, completed: null }]);
      setHabitInput('');
    }
  };

  const toggleHabitCompletion = (id, status) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: status } : habit
    ));
  };

  return (
    <Container>
      <h1>Habit Tracker</h1>
      <form onSubmit={addHabit}>
        <input 
          type="text" 
          value={habitInput} 
          onChange={(e) => setHabitInput(e.target.value)} 
          placeholder="Add a new habit"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">Add Habit</button>
      </form>
      <HabitList habits={habits} toggleCompletion={toggleHabitCompletion} />
    </Container>
  );
};

export default App;