const express = require('express');
const URL = require('../models/url');
const staticRouter = express.Router();

staticRouter.get("/", async(req, res) => {
    const allUrls = await URL.find({})
    return res.render("home", {urls : allUrls});
})

staticRouter.get("/signup", async(req, res) => {
    //const allUrls = await URL.find({})
    return res.render("signup");
})
module.exports = staticRouter;