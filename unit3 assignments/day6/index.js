//



//api -road

//fetch - roadtrip

//url - location

let url= "https://fakestoreapi.com/products";

// let myRequest= fetch(url);




// myRequest.then(function(res){

//     return res.json()
 
// }).then(function(res){
//     console.log("res :",res)
// })
// .catch(function(e){
//     console.log("e :",e);
// })

async function getData(){
 try{
    let res= await fetch(url)

    let data= await res.json()

    appendProducts(data)
 }catch(err){
     console.log("eror",err);
 }
}

getData();

// appendProducts()
let container=document.querySelector("#container");
function appendProducts(data){

    
    data.forEach(function(el){
        
        let div =document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let title= document.createElement("p");
        title.innerText=el.title;

        let price=document.createElement("p");

        price.innerText=el.price;

        div.append(img,title,price);
        container.append(div);

    })

}