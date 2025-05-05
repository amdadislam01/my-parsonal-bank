//login btn event handler
const loginButton = document.getElementById('login');
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

//deposit btn event handler
const depositButton = document.getElementById('adddeposit');
depositButton.addEventListener("click", function(){
    const depositNumber = getInputNumber('depositAmount');

    if(depositNumber < 0){
        alert("Deposit number can not be negative");
        return;
    }

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('curentBalance', depositNumber);
    
    document.getElementById('depositAmount').value = "";
  
})

//withdraw btn event handler
const withdrawButton = document.getElementById('addWithdraw');
withdrawButton.addEventListener("click", function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    
    updateSpanText('currentWithdarw', withdrawNumber);
    updateSpanText('curentBalance', -1 *  withdrawNumber);

    document.getElementById('withdrawAmount').value = "";  
})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}