let Queue = ["rama", "kalua", "gullyboy", "kancha"];


function Register() {
    let name = document.getElementById("name").value;

    Queue.push(name);

    let message = `${name} your registration is succesfull`;
    alert(message);

    let promish = new Promise(function (resolve, reject) {

       let id=setInterval(function(){
        if (Queue[0] === name) {
            resolve(`${name} its your turn`);
        }
       },1000)

    });
    promish.then(function(res) {
        alert(res)
    });

    promish.catch(function(e){
        alert(`vaccination closed`)
    });
}



function vaccination_InProgress(){
    
   
    if(Queue.length==0){
        clearInterval(x);
    }
    Queue.shift();
    console.log(Queue)

}

vaccination_InProgress();

let x=setInterval(vaccination_InProgress,2000);