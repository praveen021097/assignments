let key="79bd858439873e5aa2791f260957d9a9";

async function getWeatherData(){
    try{
        let city=document.getElementById("city").value;

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    let data= await res.json()
        showweatherData();
    console.log(data)
    }catch(ree){
        console.log("err :",err)
    }

}


getWeatherData();

function showweatherData(d){
    console.log(d);

    let name = document.createElement("p")

    name.innerText=d.name;

    let temp=document.createElement("p")

    temp.innerText=d.main.temp;

    let 

}