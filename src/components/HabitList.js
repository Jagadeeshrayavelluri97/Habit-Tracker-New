import React from 'react';
import styled from 'styled-components';

const HabitContainer = styled.div`
  margin: 10px 0;
  gap: 10px;
`;

const HabitList = ({ habits, toggleCompletion }) => {
  return (
    <div>
      {habits.map(habit => (
        <HabitContainer key={habit.id}>
          <span>{habit.name}</span>
          <label>
            <input 
              type="checkbox" 
              checked={habit.completed === true} 
              onChange={() => toggleCompletion(habit.id, true)} 
              style={{ accentColor: 'green' }} 
            />
            Done
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={habit.completed === false} 
              onChange={() => toggleCompletion(habit.id, false)} 
              style={{ accentColor: 'red' }} 
            />
            Not Done
          </label>
        </HabitContainer>
      ))}
    </div>
  );
};

export default HabitList;