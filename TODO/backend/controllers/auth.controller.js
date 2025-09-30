const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_super_secret_key";

const user = {
    username: "admin",
    password: "admin123",
    role: "admin",
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username !== userDB.username || password !== userDB.password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: userDB.username, role: userDB.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
};

exports.ping = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or malformed token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Token is valid", user: decoded });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};