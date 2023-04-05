const express = require("express");
const app = express();
const cors = require("cors");
const route=require("./Route/route")
app.get("/", (req, res) => {
    res.send("server under 3002");
})

app.use(cors({
    origin: "*"
    
})) 


app.use(route)

app.listen(3002, () => {
    console.log("server running");
   
})