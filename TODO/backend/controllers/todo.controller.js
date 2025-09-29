const todos = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Add CRUD endpoints to backend",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Add CRUD endpoints to frontend",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
    const {name} = req.body;
    console.log({name});
    res.sendStatus(201);
};

exports.read = (req, res) => {
    const activeTodos = todos.filter((todo) => !todo.deleted);
    res.send(activeTodos);
};

exports.update = (req, res) => {
    const { id, name} = req.body;
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
        return res.status(404).send("Todo not found");
    }
    todo.name = name;
    todo.updatedAt = Date.now();

    res.send("Todo has been updated");
};

exports.delete = (req, res) => {
    const {id} = req.body;
    const todo = todos.find((todo) => todo.id === id && !todo.deleted);
    if (!todo) {
        return res.status(404).send("Todo not found");
    }
    res.status(201).send("Deleted successfully")
};