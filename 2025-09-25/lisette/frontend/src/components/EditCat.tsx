import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type EditCatProps = {
  fetchCats: () => void;
};

const EditCat = ({ fetchCats }: EditCatProps) => {
  const [name, setName] = useState("");
  const [id, setId] = useState<string | null>(null);

  const editCat = async () => {
    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id, name: name }),
      });

      if (response.ok) {
        console.log("Success", response);
        setId(null);
        setName("");
        // Snackbar success
      } else {
        console.warn("No success");
        // Snackbar
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();

    editCat();
    fetchCats();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleEdit}>
        <Stack>
            <TextField
            label="Select cat ID to edit"
            value={id || ""}
            onChange={(event) => setId(event.target.value)}
            />
          <TextField
            label="New name"
            onChange={(event) => setName(event.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Edit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default EditCat;