import {render} from '@testing-library/react-native';
import React from 'react';
import {Home} from '../../src/pages/Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const app = render(<Home />);
    const inputNewTask = app.getByPlaceholderText('Nova tarefa...');
    expect(inputNewTask).toBeDefined();
  });
});
