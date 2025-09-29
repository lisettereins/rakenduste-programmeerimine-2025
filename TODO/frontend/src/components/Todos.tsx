import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";

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

  const editTodo = async (id: string, name:string) => {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, name}),
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
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
      <CreateTodo fetchTodos={fetchTodos}/>
    </Box>
  );
};

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onEdit: (id: string, name: string)=> void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
  return (
    <>
    <List>
      {todos.filter(todo => !todo.deleted).map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <Box>
              <Button
                variant= "contained"
                color="primary"
                onClick={() => {
                  const newName = prompt("Edit todo", todo.name);
                  if (newName) onEdit(todo.id, newName);
                }}
                >
                
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </Button>
            </Box>
          }

        >
          {JSON.stringify(todo)}{" "}
        </ListItem>
      ))}
      
    </List>
    </>
  );
};

export default Todos;
