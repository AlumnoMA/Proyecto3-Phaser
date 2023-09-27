const express = require("express");
const app = express();
app.get("/", (req, res) => {

// res.end("Bienvenido al servidor backend NOD...")
// console.log(__dirname),

res.sendFile(__dirname+"/public/index.html")

})

//se agrego para acceder a las rutas

app.use("/public", express.static(__dirname+ "/public"));
app.use("/src", express.static(__dirname+"/src"));
app.use("/node_modules", express.static(__dirname+"/node_modules"));

//configurar server basico

app.listen(5000, function(){
    //esta es la primera parte hasta encontrar este mensaje a traves del node server.js en la terminal
    console.log("Servidor NODE GUILLERMOAPRILE AROUND corriendo")
})