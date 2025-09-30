const express = require("express");
const router = express.router();
const todoController = require("../controllers/todo.controller");
const {
    todoRouteMiddleware,
    todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", todoController.create);
router.put("/", todoController.update);
router.delete("/", todoController.delete);
router.get("/admin", todoController.adminRead);
router.patch("/admin/:id/toggle", todoController.toggleDeleted);

module.exports = router;