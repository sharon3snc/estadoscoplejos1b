import { useState } from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 1rem;
`;

const TodoInput = styled.input`
  margin-right: 1rem;
`;

const TodoItem = ({ todo, onTodoUpdate, onTodoDelete }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpdateClick = () => {
    onTodoUpdate(todo.id, text);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onTodoDelete(todo.id);
  };

  const handleCancelClick = () => {
    setText(todo.text);
    setEditing(false);
  };

  return (
    <TodoItemContainer>
      {editing ? (
        <>
          <TodoInput type="text" value={text} onChange={handleTextChange} />
          <button onClick={handleUpdateClick}>Update</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;