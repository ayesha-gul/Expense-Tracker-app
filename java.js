var list = document.getElementById('list');



var sum = 0;
var sumEx = 0;
var balance = 0;
function incadd() {
    //detail

    var income = document.getElementById('income');
    var para = document.createElement('p');
    var paratext = document.createTextNode(income.value);
    para.appendChild(paratext);
    list.appendChild(para);
   

    //amount
    var amount = document.getElementById('amount');
    var para = document.createElement('p');
    var paratext = document.createTextNode(amount.value);
    para.appendChild(paratext);
    list.appendChild(para);
    para.style.borderRight = "3px solid blue"
    



    //sum

    sum =sum + Number(amount.value); 
    console.log(sum);
    var tinc = document.getElementById('tinc');
    tinc.innerHTML = sum;



    //balance 
    var blc = document.getElementById('blc');
     balance = balance + Number(amount.value);
     blc.innerText = balance;
    income.value ="";
    amount.value ="";
    
}


function expense() {
       //detail

       var income = document.getElementById('income');
       var para = document.createElement('p');
       var paratext = document.createTextNode(income.value);
       para.appendChild(paratext);
       list.appendChild(para);
   

    //amount
    var amount = document.getElementById('amount');
    var para = document.createElement('p');
    var paratext = document.createTextNode(amount.value);
    para.appendChild(paratext);
    list.appendChild(para);
    para.style.borderRight = "3px solid red"
    



    //sum
    sumEx = sumEx + Number(amount.value);
    var texp = document.getElementById('texp');
    texp.innerHTML = sumEx;


    var blc = document.getElementById('blc');
    balance =  balance - Number(amount.value);
    blc.innerText = balance;


    income.value ="";
    amount.value ="";
}
