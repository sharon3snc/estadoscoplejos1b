import React, { useState } from "react";
import styled from "styled-components";

const TodoFormContainer = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TodoInput = styled.input`
  margin-right: 1rem;
`;

const TodoButton = styled.button`
  margin-right: 1rem;
`;

const TodoForm = ({ onNewTodoSubmit }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodo === "") {
      return;
    }
    onNewTodoSubmit(newTodo);
    setNewTodo("");
  };

  return (
    <TodoFormContainer onSubmit={handleNewTodoSubmit}>
      <label>
        Add Todo:
        <TodoInput type="text" value={newTodo} onChange={handleNewTodoChange} />
      </label>
      <TodoButton type="submit">Add</TodoButton>
    </TodoFormContainer>
  );
};

export default TodoForm;
