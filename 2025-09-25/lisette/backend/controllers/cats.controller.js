const cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;
  console.log({ name });
  res.sendStatus(201);
};

exports.read = (req, res) => {
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.send(activeCats);
};

exports.update = (req, res) => {
  const { id, name } = req.body;
  const cat = cats.find((cat) => cat.id === id);
  if (!cat) {
    return res.status(404).send("Cat not found");
  }
  cat.name = name;
  cat.updatedAt = Date.now();

  res.send("Cat has been updated");
};

exports.delete = (req, res) => {
  const { id } = req.body;
  const cat = cats.find((cat) => cat.id === id && !cat.deleted);
  if (!cat) {
    return res.status(404).send("Cat not found");
  }
  res.send("Deleted successfully");
};
