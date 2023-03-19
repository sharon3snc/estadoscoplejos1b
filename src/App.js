import './App.css';
import TodoContextProvider from './TodoContext';
import TodoList from './TodoList';


const App = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
