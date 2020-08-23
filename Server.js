//create an express varible
 
const express = require("express")
const app = express();
app.get("/", (req, res) => {
res.send("welcome to fullstack demo")
})
const PORT = 8080;
app.listen(PORT, () => {
//console.log("Serverlistening at port"+ PORT)
console.log(`serverlistening at port ${PORT}`)
})