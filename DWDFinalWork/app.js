const express = require('express');
const app =express();
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
    res.render("home");
})

app.get("/PanicPusher",function(req,res){
    res.render("projects/PanicPusher");
})

app.get("/smartBookmark",function(req,res){
    res.render("projects/SmartBookmark");
})

app.get("/tooShallPass",function(req,res){
    res.render("projects/tooShallPass");
})

app.get("/HelloKitty",function(req,res){
    res.render("projects/HelloKitty");
})

app.get("/coastalvision",function(req,res){
    res.render("projects/coastalvision");
})

app.get("/shiffmanPiano",function(req,res){
    res.render("projects/shiffmanPiano");
})

app.get("/luopan",function(req,res){
    res.render("projects/luopan");
})

app.listen(8200, () => {
    console.log(`Server started on port`);
});