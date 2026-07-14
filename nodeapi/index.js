const btn = document.getElementById("drop-btn");
const menu = document.getElementById("dropdown");

btn.addEventListener("click", () => {

    if(menu.style.display==="block"){
        menu.style.display="none";
    }else{
        menu.style.display="block";
    }

});
app.get("/sightings",(req,res)=>{

    res.render("sightings");

});
app.get("/upload",(req,res)=>{

    res.render("upload");
})
app.use(express.urlencoded({extended:true}));
app.post("/upload",(req,res)=>{

    console.log(req.body);

    res.redirect("/sightings");

});
const sightings = [];
app.post("/upload",(req,res)=>{

    sightings.push(req.body);

    res.redirect("/sightings");

});
app.get("/sightings",(req,res)=>{

    res.render("sightings",{
        sightings
    });

});