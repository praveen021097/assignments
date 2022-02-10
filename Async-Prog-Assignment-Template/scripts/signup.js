
let userData=JSON.parse(localStorage.getItem("users"))||[];

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    let userCred={
        name:document.querySelector("#name").value,
        contact:document.querySelector("#contact").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    userData.push(userCred);

    localStorage.setItem("users",JSON.stringify(userData));

    console.log(userData);
    
})