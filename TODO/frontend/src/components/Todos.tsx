import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Todo = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();

    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

 

  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        console.log("Success", response);
        fetchTodos();
        
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <Box>
      <Typography variant="h1">To do</Typography>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </Box>
  );
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </Button>
          }
        >
          {JSON.stringify(todo)}{" "}
        </ListItem>
      ))}
      <Button variant="contained" color="success" type="submit"></Button>
    </List>
  );
};

export default Todos;
