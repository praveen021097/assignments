let imgpos=JSON.parse(localStorage.getItem("posterImage"))||[];
document.querySelector("button").addEventListener("click",function(){
    let imgAdd=document.querySelector("#imageAdd").value;

    imgpos.push(imgAdd);

    localStorage.setItem("posterImage",JSON.stringify(imgpos));
})