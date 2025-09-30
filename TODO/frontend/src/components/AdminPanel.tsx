import { useEffect, useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  Typography,
  Chip,
} from "@mui/material";

type Todo = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const AdminPanel = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todos/admin");
    const data = await response.json();
    setTodos(data);
  };

  const toggleDeleted = async (id: string) => {
    const response = await fetch(
      `http://localhost:3000/todos/admin/${id}/toggle`,
      {
        method: "PATCH",
      }
    );
    const updated = await response.json();
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updated : todo))
    );
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Admin Panel – Kõik TODO-d
      </Typography>

      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #eee",
            }}
          >
            <Box>
              <Typography variant="subtitle1">{todo.name}</Typography>
              <Chip
                label={todo.deleted ? "KUSTUTATUD" : "AKTIIVNE"}
                color={todo.deleted ? "error" : "success"}
                size="small"
                sx={{ mt: 1 }}
              />
            </Box>

            <Button
              variant="outlined"
              onClick={() => toggleDeleted(todo.id)}
              color={todo.deleted ? "success" : "error"}
            >
              {todo.deleted ? "Taasta" : "Kustuta"}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminPanel;
