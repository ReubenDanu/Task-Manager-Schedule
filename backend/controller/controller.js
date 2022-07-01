// const db = require('../models/models.js');

const home = function (req, res) {
    res.send('home')
    console.log("route home entered!")

}
const createTask = function (req, res) {
    res.send('create task')
    console.log("route post entered!")
}
const getTask = function (req, res) {
    res.send('get task')
    console.log("route get entered!")
}
const updateTask = function (req, res) {
    res.send('update task')
    console.log("route update entered!")
}
const deleteTask = function (req, res) {
    res.send('delete task')
    console.log("route delete entered!")
}

module.exports = {
    home,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
