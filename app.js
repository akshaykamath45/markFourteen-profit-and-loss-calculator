var initialPrice = document.querySelector('#initial-price');
var qunatityOfStocks=document.querySelector('#stocks-quantity');
var currentPrice=document.querySelector('#current-price');

var submitButton=document.querySelector('#submit-btn')
var output=document.querySelector('#output');

function submitHandler(){
    var ip=initialPrice.value;
    var qty=qunatityOfStocks.value;
    var curr=currentPrice.value;
    calculateProfitandLoss(ip,qty,curr);
}
function calculateProfitandLoss(initial,quantity,current){
    if(initial>current){
        //loss logic
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/initial)*100;
        console.log(`Hey Loss is ${loss} and the percent is ${lossPercentage}%`)
    }else if(current>initial){
        //Profit Logic
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/initial)*100;
        console.log(`Hey profit is ${profit} and the percent is ${profitPercentage}%`)
    }   
    else{
        console.log("No Profit,No Less");
    }
}
submitButton.addEventListener('click',submitHandler)