import { Box, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";

type SubmitTodoProps = {
    fetchTodos: () => void;
};

const CreateTodo = ({fetchTodos}: SubmitTodoProps) => {
    const [name, setName] = useState("");

    const createTodo = async () => {
        try {
        const response = await fetch("http://localhost:3000/todos", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name }),
            });

            if (response.ok) {
                console.log("Success", response);
        
            } else {
                console.warn("No success");
        
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const handleCreate = (event: React.FormEvent) => {
        event.preventDefault();

        createTodo();
        setTimeout(fetchTodos, 100);
    };
    
    return (
        <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleCreate}>
        <Stack>
          <TextField
            label="New task"
            onChange={(event) => setName(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Create
          </Button>
        </Stack>
      </form>
    </Box>
    );
};

export default CreateTodo;
