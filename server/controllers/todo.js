import todoModel from "../models/todo.js";

export const createTodo = async (req, res) => {
    const { todo, isPrivate } = req.body

    const getCurrentUnix = () => {
        return Math.floor(new Date().getTime() / 1000);
    }

    let data = {
        todo,
        author: req.tokenData.name,
        isPrivate
    }

    data.timestamp = getCurrentUnix();

    const created = await todoModel.create(data)

    if(!created) res.status(404).json({message: "todo was not created"})

    res.status(200).json({message: "success", created})
}