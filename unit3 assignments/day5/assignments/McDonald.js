let count=0;
    let queue = ["ramesh", "suresh", "kalam", "kamlesh", "suresh", "boss"];

   document.querySelector("button").addEventListener("click",function(){
    
        let name = document.getElementById("name").value;

        queue.push(name);

        count=Math.round(Math.random()*100);

        console.log("queue :", queue);
        let number=document.createElement("h1");
        number.setAttribute("class","number")
        number.innerText=`#${count}`;
        document.querySelector("h1").append(number)
        alert(`${name} your order is registered !`);



        let promise = new Promise(function (resolve, reject) {
            setInterval(function () {
                if (queue[0] == name) {
                    resolve(`${name} your order is ready !`);


                }




            }, 5000);


        });

        let order = document.getElementsByClassName("menu");

        for (let i = 0; i < order.length; i++) {
            if (order[i].checked == true) {
                let img = document.createElement("img");
                img.src = order[i].value;
                document.querySelector("#menulist").append(img);
            }
        }
        promise.then(function (res) {
            alert(res);
        });




    
   })

    function orderProcess() {
        queue.shift();
        console.log(queue);
        if (queue.length == 0) {
            clearInterval(id);
        }
    }

    let id = setInterval(orderProcess, 2000)