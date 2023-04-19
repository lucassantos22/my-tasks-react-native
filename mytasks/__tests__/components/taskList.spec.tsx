import {Alert} from 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import React from 'react';
import {TaskList} from '../../src/components/TaskList';
import {TasksContext} from '../../src/context/TasksContext';

describe('TaskList page', () => {
  it('alert should be called if any task is clicked', () => {
    const alertSpy = jest.spyOn(Alert, 'alert');
    const removeTask = jest.fn();
    render(
      <TasksContext.Provider
        value={{
          addTask: jest.fn(),
          tasks: [{id: '1', title: 'title'}],
          removeTask,
        }}>
        <TaskList />
      </TasksContext.Provider>,
    );
    fireEvent.press(screen.getByText('title'));
    expect(alertSpy).toHaveBeenCalled();
  });
});
