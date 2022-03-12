let express = require("express");

let app = express();

app.get("/books", (req,res) => {

    return res.send({route:"/books"});
});

function logger(req,res,next){
    if(req.path == "/books")
    {
        console.log("fetching all books")
    }
    next();
}

app.listen(6000, () =>{
    console.log("Listening to port 6000");
});