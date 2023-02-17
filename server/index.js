const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/a", (req, res)=> {
    res.setHeader('Content-Type', 'application/json');
    res.json({"users": ["userOne", "userTwo"]});
})

app.listen(5000, ()=> {
    console.log("Server on port 5000");
})