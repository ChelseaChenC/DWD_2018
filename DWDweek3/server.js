var config = require("./config.js");

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongojs = require('mongojs');


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// let ITPers = [
//     {name: "Barak", image: "https://i2.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_6341.jpg?ssl=1&w=450"},
//     {name: "Dan", image: "https://i1.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_6009.jpg?ssl=1&w=450"}
//     ];


let db = mongojs(config.username+":"+config.password+"@ds131258.mlab.com:31258/itpzzz", ["ITPers"]);

// app.use(express.static('public'));



    
app.get("/", function(req, res){
    res.render("landing");
});




app.get("/ITPers", function(req, res){
    console.log('in find');
    console.log(db);
    db.ITPers.find({}, function(err, saved){
        if (err||!saved){
            console.log("no results");
        } else {
            console.log(saved);
            res.render("ITPers",{ITPers:saved});
        }
    })   
});

app.post("/ITPers", function(req, res){
    // get data from form and add to campgrounds array
    let name = req.body.name;
    let image = req.body.image;

    if (!name || !image) throw new Error("Image and name are required.");

    let newITPer = {
         "name": name, 
         "image": image
        }
    // ITPers.push(newITPer);
    //redirect back to campgrounds page
    // console.log("They submitted: " + req.body.textfield);
    // res.send("You Submitted: " + req.body.textfield)
 
    // db.ITPers.save({"ITPers":newITPer}, function(err, saved) {
     db.ITPers.save(newITPer, function(err, saved) {

        if( err || !saved ) console.log("Not saved");
        else console.log("Saved");
        });

     res.redirect("ITPers");
});


app.get("/ITPers/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(3050, function(){
   console.log("Server is fine!");
});