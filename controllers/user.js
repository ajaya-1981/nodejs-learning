const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
}

async function handleGetUserById(req, res) {
    const dBUser = await User.findById(req.params.id);
    //const user = users.find((user) => user.id === user_id);
    if (!dBUser) {
        return res.status(404).json({ Error: "No user exists for this id " });
    }
    return res.json(dBUser);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {
        lastName: req.body.last_name,
        gender: req.body.gender
    });
    return res.json({ status: "Update Success" });
}

async function handleDeleteUser(req, res) {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Delete Success" });
}

async function handleCreateUser(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender) {
        return res.status(400).json({ msg: "all fields are required" })
    }
    const user = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender
    })
    return res.status(201).json({ message: "Success" });

}
module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUser,
    handleCreateUser
}