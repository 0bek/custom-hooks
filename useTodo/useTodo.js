import { todoReducer } from "./todoReducer";
import { useEffect, useReducer } from 'react'


const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log(todo);

    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    console.log(id);

    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

   
  
  return {
	todos,
	todosCount: todos.length || 0,
   	pendingTodosCount: todos.filter( t => !t.done ).length,
	handleNewTodo,
	handleDeleteTodo,
	handleToggleTodo	
  };
};
