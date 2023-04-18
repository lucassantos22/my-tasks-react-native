import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {Home} from '../../src/pages/Home';
import {TasksContext} from '../../src/context/TasksContext';

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />);
    const inputNewTask = screen.getByPlaceholderText('Nova tarefa...');
    expect(inputNewTask).toBeDefined();
  });

  it('addTask should be called if Adicionar button is clicked', () => {
    const addTask = jest.fn();
    render(
      <TasksContext.Provider
        value={{addTask, tasks: [], removeTask: jest.fn()}}>
        <Home />
      </TasksContext.Provider>,
    );
    fireEvent.changeText(
      screen.getByPlaceholderText('Nova tarefa...'),
      'Tarefa 1',
    );
    fireEvent.press(screen.getByText('Adicionar'));
  });
});
