
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var ITPers = [
        {name: "Barak", image: "https://i2.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_6341.jpg?ssl=1&w=450"},
        {name: "Dan", image: "https://i1.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_6009.jpg?ssl=1&w=450"},
        {name: "Itay & Oren", image: "https://i0.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_5363.jpg?ssl=1&w=450"},
        {name: "My cat", image: "https://i2.wp.com/itploveschelsea.files.wordpress.com/2018/02/img_6818.jpg?ssl=1&w=450"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/ITPers", function(req, res){
    res.render("ITPers",{ITPers:ITPers});
});

app.post("/ITPers", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newITPer = {name: name, image: image}
    ITPers.push(newITPer);
    //redirect back to campgrounds page
    res.redirect("/ITPers");
});

app.get("/ITPers/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(3030, function(){
   console.log("Server is fine!");
});