var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect(process.env.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))


const userSchema = {
    name: String,
    email: String
  };

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res){
    res.set({
     "Allow-access-Allow-Origin": '*'
             })
    res.render("index.html");
  });

app.post("/", function(req, res){
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });

    user.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    });

app.listen(PORT || 4000, function() {
    console.log("Server started on port 4000");
  });

console.log("Listening on PORT 4000");