/* Toggle Contact Info Icon */
$('#contactlink').click(function() {
    var el = $(this);
    el.text() == el.data("text-swap") 
      ? el.text(el.data("text-original")) 
      : el.text(el.data("text-swap"));
    el.toggleClass( "blackwhite" );
});

/* Change background on Hover*/
let bgimg= document.getElementById("background-image");
let items= Array.from(document.getElementsByClassName("item"));
items.forEach(function(item){
    console.log(item);
    item.addEventListener("mouseenter",function(){
       
        bgimg.style.backgroundImage=item.style.backgroundImage;
    });
    item.addEventListener("mouseleave",function(){
        bgimg.style.backgroundImage="";
      });
})

/* Change role */
let role= document.getElementById("role");

let desciption ={
    "designer":{
        "description":
        ["Heeey! I am Chelsea, I define myself as an"]
        ,
        "image":
        ["img/bookmark.jpg",
         "img/hk.jpg",
         "img/cvc.jpg",
         "img/mashups.jpg",
         "img/mountain3.jpg"
        ],
        "url":[
         "/smartBookmark",
         "/HelloKitty",
         "/coastalvision",
         "/project",
         "/project"
        ],
        "projectDetails":[
        "smartBookmark",
        "HelloKitty Eyewear Design",
        "CoastalVision",
        "Nasa",
        "PanicPusher"
        ]
    }
    ,
    "coder":{
        "description":
        ["I am a great",",the best in the world"]
        ,
        "image":
        ["img/panicpusher.jpg",
         "img/luopan.jpg",
         "img/mashups.jpg",
         "img/shiffman.jpg",
         "img/revenge.jpg"
        ],
        "url":[
         "/PanicPusher",
         "/project",
         "/",
         "/shiffmanPiano",
         "/revenge"
        ],
        "projectDetails":[
        "Nasa",
        "PanicPusher",
        "",
        "shiffmanPiano",
        "revenge"
        ]
    }
    ,
    "artist":{
        "description":
        ["What about","? That's not me.hahaha"]
        ,
        "image":
        ["img/shallPass.jpg",
         "img/panicpusher.jpg",
         "img/luopan.jpg",
         "img/3d.jpg",
         "img/lip.jpg"
        ],
        "url":[
         "/tooShallPass",
         "/panicpusher",
         "/luopan",
         "/project",
         "/project"
        ],
        "projectDetails":[
        "This, Too, Shall Pass",
        "luopan",
        "PanicPusher",
        "PanicPusher",
        "PanicPusher"
        ]
    }
};

let des1     = document.getElementById("description1");
let des2     = document.getElementById("description2");
let project = Array.from(document.getElementById("projects").children);

role.addEventListener("change",function(){
  //Change description  
  // des1.innerText= desciption[role.value]["description"][0];
  // des2.innerText= desciption[role.value]["description"][1];
  //Change Project image & links
  project.forEach(function(elements,index){
  
    elements.style.backgroundImage="url("+desciption[role.value]["image"][index]+")";
    
    elements.getElementsByTagName("a")[0].href=desciption[role.value]["url"][index];
    elements.getElementsByClassName("item__details")[0].innerText=desciption[role.value]["projectDetails"][index];
  });
  
})