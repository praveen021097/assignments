
async function getMovie(){
    let name=document.getElementById("Mname").value;
    console.log(name)
        try{
            let res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=dfd3bdf6&s=${name}`)

            let data=await res.json()

            printData(data)
            
        }
        catch(error){
            console.log("error",error);
            alert("inavalid Movie Name!")

        }

    
}
let container=document.getElementById("container");
let container2=document.getElementById("container2");
let flag=true;

function printData(data){
    container.innerHTML="";
    container2.innerHTML="";
    data.Search.forEach(function(elem){
        let imdb=Math.abs(Math.random()*5+5).toFixed(1);
      
      
        if(imdb>8.5){
            let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=elem.Poster;

        let title=document.createElement("p");
        title.innerText=`Title : ${elem.Title}`;

        let year=document.createElement("p")
        year.innerText=`Year : ${elem.Year}`;

        let rating=document.createElement("p");
        rating.innerText= `Rating : ${imdb}`

        div.append(img,title,year,rating);

        container.append(div);
        container2.append(div);
        }
       
    
       
    })
   
}








