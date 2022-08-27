const { response } = require('express');
const taskModel = require('../models/task.js');

const getAllTask = async function (req, res) {
    const task = await taskModel.find({});

    try {
        res.send(task);

    } catch (error) {
        res.status(500).send(error);
    }
    console.log("route home entered!");

}
const createTask = async function (req, res) {
    const task = new taskModel(req.body);

    try {
        await task.save();
        res.send('task succesfully created');

    } catch (error) {
        res.status(500).send(`Cannot created task due to: ${error}`);
    }
    console.log("route post entered!");
}

const getTaskById = async function (req, res) {
    const task = await taskModel.findById(req.params.id);
    try {
        res.send(task);
    } catch (error) {
        res.status(400).send("cannot find task", error)
    }
    console.log("route get entered!");
}

const updateTask = async function (req, res) {
    try {

        await taskModel.findByIdAndUpdate(req.params.id, req.body);
        await taskModel.save();
        res.send('update task succesfully');
        console.log("route update entered!");
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteTask = async function (req, res) {
    try {
        const task = await taskModel.findByIdAndDelete(req.params.id);

        if (!food) res.status(404).send("No task found");
        res.status(200).send("task deleted successfully");
    } catch (error) {
        res.status(500).send(error)
    }
    console.log("route delete entered!")
}

module.exports = {
    getAllTask,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}
