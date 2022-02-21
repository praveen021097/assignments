// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// myFish.splice(1,0,'dalphin');//add one element in index 1

// console.log(myFish);

// myFish.splice(2,1);//delete one element 

// console.log(myFish)//

// //here is mutability because it is non primitive data type

// //[ 'angel', 'dalphin',  'mandarin', 'sturgeon' ] expected output

// //slice make cut array of piece
// console.log(myFish.slice(2));

// //but here is not changes original array 

// Object.freeze(myFish);//here i freeze the array

// console.log(myFish.slice(3));

// console.log(myFish);//not change original array

// myFish[0]='bluefish';//here is mutbility not work if you want to non primitive data type immutable then you use 
// //object.freeze

// console.log(myFish);


// //differnce between const and freeze

// const num =3;//if you declare the variable as const then you not reassign the value

// num=4;
// console.log(num);//there is an error

// //object.freeze make immutable object



function printCount(n){
    if(n==0){
        return;
    }
    printCount(n-1);
    console.log(n);
}


printCount(5);
