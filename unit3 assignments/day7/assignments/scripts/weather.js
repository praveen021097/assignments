
let API_KEY="b8b14c37d1dc62fa8d3a6dcc245f57c9";
let getWeather=async()=>{
   try{
    let city= document.getElementById("city").value;
    let API_KEY="b8b14c37d1dc62fa8d3a6dcc245f57c9";
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    let data = await res.json();
    
   appendData(data);
   
   }
   catch(error){
     console.log("error :",error)
   }
  
}
let parent=document.getElementById("container");
let appendData=(data)=>{
    parent.innerHTML="";

    
     
      let div=document.createElement("div");
      let name=document.createElement("p");
      name.innerText=`City :${data.name}`
      let tempr=document.createElement("p");
      tempr.innerText=`Tempreture : ${data.main.temp}°`;

      let tmin=document.createElement("p");
      tmin.innerText=`Minimum Tempreture :${data.main.temp_min}°`;

      let tmax=document.createElement("p");
      tmax.innerText=`Maximum Tempreture : ${data.main.temp_max}°`;

      let pre=document.createElement("p");
      pre.innerText=`Pressure :${data.main.pressure}`;

      let huma=document.createElement("p");
      huma.innerText=`Humidity : ${data.main.humidity}`;

      div.append(name,tempr,tmin,tmax,pre,huma);

      parent.append(div);

   
}

