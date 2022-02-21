

let getData =async(url)=>{

    try{
        let res=await fetch(url);

    let data = await res.json();
        return data;
   
    }catch(error){
        console.log("error :",error)
    }

}

let appendData=(data,parent)=>{
   data.forEach((elem)=>{
       let con=document.createElement("div");

       let p=document.createElement("p");
         p.innerText=elem.title;
         
         let img=document.createElement("img");

         img.src=elem.image;

         con.append(img,p);

        parent.append(con)

   });
}

export {getData,appendData};