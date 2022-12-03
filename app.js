var initialPrice = document.querySelector('#initial-price');
var qunatityOfStocks=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');

var submitButton=document.querySelector('#submit-btn')
var output=document.querySelector('#output');

function submitHandler(){
    //Type casting to Number
    var ip=Number(initialPrice.value);
    var qty=Number(qunatityOfStocks.value);
    var curr=Number(currentPrice.value);
    calculateProfitandLoss(ip,qty,curr);
}
function calculateProfitandLoss(initial,quantity,current){
    if(initial>current){
        //loss logic
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        output.innerText=(`Hey Loss is ${loss} and the percent is ${lossPercentage}%`)
    }else if(current>initial){
        //Profit Logic
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        output.innerText=(`Hey profit is ${profit} and the percent is ${profitPercentage}%`)
    }   
    else{
        output.innerText=("No Profit,No Less");
    }
}
submitButton.addEventListener('click',submitHandler)