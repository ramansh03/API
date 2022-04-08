const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
require("./db/conn")
const Data = require("./models/userProfile")
const port = process.env.PORT || 5000;

app.use(express.json());

app.post("/userdata", async (req, res) => {
    const user = new Data(req.body);
    try {
        const createUser = await user.save();
        res.status(201).send(createUser)
    } catch (e) {
        res.status(400).send(e)
    }
})
app.get("/userdata", async (req, res) => {
    try {
        const userData = await Data.find();
        res.status(200).send(userData)
    } catch (e) {
        res.status(400).send(e)
    }
})
app.patch("/userdata/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const updateUser = await Data.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(updateUser);
    } catch (e) {
        res.status(400).send(e)
    }
})
app.delete("/userdata/:id", async (req, res) => {
    try {
        const deleteStudent = await Data.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteStudent);
    } catch (e) {
        res.status(400).send(e)
    }
})
app.listen(port, () => {
    console.log(`This is ruuning on the port ${port}`)
})