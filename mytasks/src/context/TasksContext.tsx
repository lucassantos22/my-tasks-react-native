import React, {createContext} from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITasksContext {
  id: string;
  title: string;
  addTask(): void;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  function addTask() {
    console.log('Adding task...');
  }

  return (
    <TasksContext.Provider
      value={{
        id: '1',
        title: 'task01',
        addTask,
      }}>
      {children}
    </TasksContext.Provider>
  );
};
