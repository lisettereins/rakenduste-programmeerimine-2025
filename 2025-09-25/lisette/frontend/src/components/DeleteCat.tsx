import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type DeleteCatProps = {
  fetchCats: () => void;
};

const DeleteCat = ({ fetchCats }: DeleteCatProps) => {
  const [id, setId] = useState<string>("");

  const deleteCat = async () => {
    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {  
        console.log("Success", response);
        fetchCats();
        setId("");
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault();
    deleteCat();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleDelete}>
        <Stack>
          <TextField
            label="Cat ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Delete
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DeleteCat;