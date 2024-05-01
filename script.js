document.querySelector("#main").addEventListener("mousemove",function(gc){
    document.querySelector(".img-top").style.width = gc.clientX + "px" ;
console.log(gc.clientX)
})