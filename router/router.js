"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
    res.send("I am here now");
    next("Iam here now");
});
router.post("/todos", (req, res, next) => {
    const receiveDates = {
        id: '1234567',
        title: req.body.title
    };
    todos.push(receiveDates);
    res.status(201).json({ message: "added with sucess", todos: todos });
});
router.put("/todos/edit", (req, res, next) => {
    const get = req.params.todosId;
    const findId = todos.findIndex(findId => findId.id === get);
    if (findId >= 0) {
        todos[findId] = { id: todos[findId].id, title: req.body.title };
        res.status(200).json({ message: "update todos id with success", todos: todos });
    }
    res.status(400).json({ message: "could not find the todos byid" });
});
exports.default = router;
