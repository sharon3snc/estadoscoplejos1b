import { useContext } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContext";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TodoList = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);

  const handleNewTodoSubmit = (newTodo) => {
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
    };
    addTodo(newTodoItem);
  };

  const handleTodoUpdate = (id, newText) => {
    updateTodo(id, newText);
  };

  const handleTodoDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <TodoListContainer>
      <h2>Todo List</h2>
      <TodoForm onNewTodoSubmit={handleNewTodoSubmit} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onTodoUpdate={handleTodoUpdate}
          onTodoDelete={handleTodoDelete}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
