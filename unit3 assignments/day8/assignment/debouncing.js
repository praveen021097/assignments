

async function searchMovie(){
    //get the movie name

   try{
    let movie = document.getElementById("Mname").value;

    let res =await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=dfd3bdf6&s=${movie}`);

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

    movies_div.style.display="block";
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