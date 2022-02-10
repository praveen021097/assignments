async function searchMovie(){
    //get the movie name

   try{
    let movie = document.getElementById("query").value;

    let res =await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${movie}`);

    let data =await res.json();

    return data.Search;

   }
   catch(error){
       console.log("err :",error)
   }
    
}


 async function main(){

    let data= await searchMovie()
    if(data===undefined){
        return false;
    }
   appendData(data);

}
let movies_div=document.getElementById("movies");

function appendData(movies){

    movies_div.innerHTML="";
    movies.forEach(function(elem){

        let p=document.createElement('p')

        p.innerText=elem.Title

        movies_div.append(p);

    })
}

//debounce

let timeId;

function debounce(func,delay){
if(timeId){
    clearTimeout(timeId);
}

timeId=setTimeout(function(){
    func();
},delay)



}