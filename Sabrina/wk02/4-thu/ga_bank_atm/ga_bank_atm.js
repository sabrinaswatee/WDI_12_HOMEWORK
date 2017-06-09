/*
Specification:

1. Keep track of the checking and savings balances somewhere
2. Add functionality so that a user can deposit money into one of the bank accounts.
3. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
4. Add functionality so that a user can withdraw money from one of the bank accounts.
5. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
6. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
7. When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account
8. What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection,
   so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal
   from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
9. Make sure there is overdraft protection going both ways.
10. Are there ways to refactor your code to make it DRYer
*/

var savings = {
    balance: document.querySelector ('#balanceSavings'),
    input: document.querySelector ('#inputSavings'),
    withdraw: document.querySelector ('#withdrawSavings'),
    deposit: document.querySelector ('#depositSavings'),
};
var cheques = {
    balance: document.querySelector ('#balanceCheques'),
    input: document.querySelector ('#inputCheques'),
    withdraw: document.querySelector ('#withdrawCheques'),
    deposit: document.querySelector ('#depositCheques')
};
var message = document.querySelector ('#message');
var newInput = 0;

var balanceColor = function () {
  if (savings.balance.textContent == '00.00') {
    savings.balance.className = 'color';
  }
  else {
    savings.balance.className = 'undoColor';
  }

  if (cheques.balance.textContent == '00.00') {
    cheques.balance.className = 'color';
  }
  else {
    cheques.balance.className = 'undoColor';
  }
}

var depositSavings = function () {
  var savingsNoDecimal = 0;
  if (Math.sign (Number (savings.input.value)) == -1) {
    savings.input.value = '';
  }
  else {
    savingsNoDecimal = Number (savings.balance.textContent) + Number (savings.input.value);
    savings.balance.textContent = parseFloat(savingsNoDecimal).toFixed(2);
    savings.input.value = '';
  }
  // message.textContent = "Thank You for Using This Service";
  balanceColor ();
}

var depositCheques = function () {
  var chequesNoDecimal = 0;
  if (Math.sign (Number (cheques.input.value)) == -1) {
    cheques.input.value = '';
  }
  else {
    chequesNoDecimal = Number (cheques.balance.textContent) + Number (cheques.input.value);
    cheques.balance.textContent = parseFloat(chequesNoDecimal).toFixed(2);
    cheques.input.value = '';
  }
  // message.textContent = "Thank You for Using This Service";
  balanceColor ();
}

var withdrawSavings = function () {
  var totalBalance = Number (savings.balance.textContent) + Number (cheques.balance.textContent);
  savingsNoDecimal = Number (savings.balance.textContent) - Number (savings.input.value);

  if (Math.sign (Number (savings.input.value)) == -1) {
    cheques.input.value = '';
  }
  else if (Number (savings.balance.textContent) > Number (savings.input.value)) {
    savings.balance.textContent = parseFloat(savingsNoDecimal).toFixed(2);
  }
  else if (Number (savings.balance.textContent) == Number (savings.input.value)) {
    savings.balance.textContent = '00.00';
  }
  else if (totalBalance < Number (savings.input.value)) {
    message.textContent = "Insufficient Balance";
  }
  else {
    newInput = Number (savings.input.value) - Number (savings.balance.textContent);
    savings.balance.textContent = '00.00';
    var output = parseFloat(Number (cheques.balance.textContent) - newInput).toFixed(2);
    if (output == '0.00') {
      cheques.balance.textContent = '0' + output;
    }
    else {
      cheques.balance.textContent = output;
    }
  }
  savings.input.value = '';
  // message.textContent = "Thank You for Using This Service";
  balanceColor ();
}

var withdrawCheques = function () {
  var totalBalance = Number (cheques.balance.textContent) + Number (savings.balance.textContent);
  chequesNoDecimal = Number (cheques.balance.textContent) - Number (cheques.input.value);

  if (Math.sign (Number (cheques.input.value)) == -1) {
    cheques.input.value = '';
  }
  else if (Number (cheques.balance.textContent) > Number (cheques.input.value)) {
    cheques.balance.textContent = parseFloat(chequesNoDecimal).toFixed(2);
  }
  else if (Number (cheques.balance.textContent) == Number (cheques.input.value)) {
    cheques.balance.textContent = '00.00';
  }
  else if (totalBalance < Number (cheques.input.value)) {
    message.textContent = "Insufficient Balance";
  }
  else {
    newInput =  Number (cheques.input.value) - Number (cheques.balance.textContent);
    cheques.balance.textContent = '00.00';
    var output = parseFloat(Number (savings.balance.textContent) - newInput).toFixed(2);
    if (output == '0.00') {
      savings.balance.textContent = '0' + output;
    }
    else {
      savings.balance.textContent = output;
    }
  }
  cheques.input.value = '';
  // message.textContent = "Thank You for Using This Service";
  balanceColor ();
}

balanceColor ();
savings.withdraw.addEventListener ('click', withdrawSavings);
savings.deposit.addEventListener ('click', depositSavings);
cheques.withdraw.addEventListener ('click', withdrawCheques);
cheques.deposit.addEventListener ('click', depositCheques);
