let users=JSON.parse(localStorage.getItem("users"))||[];

document.querySelector("button").addEventListener("click",function(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;

  for(let i=0; i<users.length;i++){
     if(users[i].email==email &&users[i].password==password){
        alert(`login succesfull`);
        window.location.href="index.html";
     }
     else{
         alert(`invalid Credentials`);
     }
  }
})