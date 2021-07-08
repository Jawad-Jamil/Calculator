// document.getElementById('heading').addEventListener('click', function(){
//     alert('You Clciked Me! So What!')
// })


// console.log("Hello World")

// let a;
// a=15;

// const c = 5;

// let b;
// b = 10;

// console.log(
//     'a=' + a,
//     'b=' + b,
//     'c=' + c,
//     'a+b=' +(a+b),
//      a+b
// );


// console.log('a=' + a);
// console.log('b=' + b);
// console.log('c=' + c);
// console.log('a+b=' +(a+b));
// console.log(a+b);



// b = 7;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b, typeof a);
// console.log(null, typeof null);
// console.log(undefined, typeof undefined);
// console.log(
//     {a,b}, typeof undefined);

// let datas = (1-2)*4/2;

// console.log(datas , typeof datas);


// function printing(message){
//     console.log(message);
// }

// printing("Hello World");
// printing('a=' + a);
// printing('hi');
// printing('hee');
// printing('lorem');
// printing('ds');



// function print (namf,roll) {
//     console.log(namf,roll);
// }


// print('sobuj',50)
// print('hablu',20)
// print('labu',440)
// print('habu',480)
// print('lhabu',4809)
// print('labu',4780)
// print('',470)
// print('lahbu',470)
// print('lahbu',450)
// print('lahbu',50)


// let nam, roll, sreni;

// nam= " jawad";
// roll= " 20";
// sreni= " 10";

// function student(nam,roll,sreni) {
//     console.log('my name is' + nam);
//     console.log('my roll is'+ roll);
//     console.log("my class is" + sreni);
    
// }


// student(nam,roll,sreni)


// let nams, rolls, srenis;

// nams=" jamil"
// rolls=" 70"
// srenis=" 60"

// student(nams,rolls,srenis)



// let nms, rlls, srnis;
// nms=" jag"
// rlls=" 40"
// srnis=" 70"

// student(nms,rlls,srnis)


// let in_hand = 500;
// let after_expense



// function bazar_track(tk,element,price) {
//     console.log("egg:" + price);
//     return tk-price
// }


// after_expense = bazar_track(in_hand,"egg",110)
// console.log(after_expense);

// after_expense = bazar_track(after_expense,"rice",50)
// console.log(after_expense);

// after_expense = bazar_track(after_expense,"chanachur",70)
// console.log(after_expense);

// after_expense = bazar_track(after_expense,"cake",200)
// console.log(after_expense);

// after_expense = bazar_track(after_expense,"muri",10)
// console.log(after_expense);

// after_expense = bazar_track(after_expense,"begun",60)
// console.log(after_expense);


function calculator(num1,num2) {
    console.log(`Sum = ${num1 + num2}`);
    console.log(`Sub = ${num1-num2}`);
    console.log(`Mul = ${num1*num2}`);
    console.log(`Div = ${num1/num2}`);
    console.log(`Mod = ${num1 % num2}`);


    document.getElementById("myList").innerHTML = "";

    
var node = document.createElement("LI");
    var textNode = document.createTextNode(`Sum = ${num1 + num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);



var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mul = ${num1*num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);



var node = document.createElement("LI");
    var textNode = document.createTextNode(`Div = ${num1/num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);



var node = document.createElement("LI");
    var textNode = document.createTextNode(`Mod = ${num1 % num2}`);
    node.appendChild(textNode);
    document.getElementById("myList").appendChild(node);
}



