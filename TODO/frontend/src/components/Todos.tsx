import { Box, List, ListItem, Typography } from "@mui/material";
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

  return (
    <Box>
      <Typography variant="h1">To do</Typography>
      <TodoList todos={todos} />
    </Box>
  );
};

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <List>
            {todos.map((todo) => (
                <ListItem key={todo.id}>{JSON.stringify(todo)}</ListItem>
            ))}
        </List>
    );
};

export default Todos;
