import React, {createContext} from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITasksContext {
  id: string;
  title: string;
}

export const TasksContext = createContext<ITasksContext>({} as ITasksContext);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  return (
    <TasksContext.Provider
      value={{
        id: '1',
        title: 'task01',
      }}>
      {children}
    </TasksContext.Provider>
  );
};
