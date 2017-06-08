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

// var balanceColor = function (amount, account) {
//   if ('account'.balance.textContent == amount) {
//     'account'.balance.style.backgroundColor = 'red';
//     'account'.balance.style.color = 'white';
//   }
//   else {
//     account.balance.style.backgroundColor = 'white';
//     account.balance.style.color = 'grey';
//   }
// }

var depositSavings = function () {
  var savingsNoDecimal = 0;
  savingsNoDecimal = Number (savings.balance.textContent) + Number (savings.input.value);
  savings.balance.textContent = parseFloat(savingsNoDecimal).toFixed(2);
  // message.textContent = "Thank You for Using This Service";
}

var depositCheques = function () {
  var chequesNoDecimal = 0;
  chequesNoDecimal = Number (cheques.balance.textContent) + Number (cheques.input.value);
  cheques.balance.textContent = parseFloat(chequesNoDecimal).toFixed(2);
  // message.textContent = "Thank You for Using This Service";
}

var withdrawSavings = function () {
  var totalBalance = Number (savings.balance.textContent) + Number (cheques.balance.textContent);
  savingsNoDecimal = Number (savings.balance.textContent) - Number (savings.input.value);

  if (Number (savings.balance.textContent) > Number (savings.input.value)) {
    savings.balance.textContent = parseFloat(savingsNoDecimal).toFixed(2);
  }
  else if (Number (savings.balance.textContent) == Number (savings.input.value)) {
    savings.balance.textContent = '00.00';
    savings.balance.style.backgroundColor = 'red';
    savings.balance.style.color = 'white';
  }
  else if (totalBalance < Number (savings.input.value)) {
    message.textContent = "Insufficient Balance";
  }
  else {
    newInput = Number (savings.input.value) - Number (savings.balance.textContent);
    savings.balance.textContent = "00.00";
    savings.balance.style.backgroundColor = 'red';
    savings.balance.style.color = 'white';
    cheques.balance.textContent = parseFloat(Number (cheques.balance.textContent) - newInput).toFixed(2);
  }
  // balanceColor (savings.balance.textContent, savings);
  // message.textContent = "Thank You for Using This Service";
}

var withdrawCheques = function () {
  var totalBalance = Number (chequesbalance.textContent) + Number (savings.balance.textContent);
  chequesNoDecimal = Number (cheques.balance.textContent) - Number (cheques.input.value);

  if (Number (cheques.balance.textContent) > Number (cheques.input.value)) {
    cheques.balance.textContent = parseFloat(chequesNoDecimal).toFixed(2);
  }
  else if (Number (cheques.balance.textContent) == Number (cheques.input.value)) {
    cheques.balance.textContent = '00.00';
    cheques.balance.style.backgroundColor = 'red';
    cheques.balance.style.color = 'white';
  }
  else if (totalBalance < Number (cheques.input.value)) {
    message.textContent = "Insufficient Balance";
  }
  else {
    newInput =  Number (cheques.input.value) - Number (cheques.balance.textContent);
    cheques.balance.textContent = "00.00";
    cheques.balance.style.backgroundColor = 'red';
    cheques.balance.style.color = 'white';
    balanceSavings.textContent = parseFloat(Number (balanceSavings.textContent) - newInput).toFixed(2);
  }
  // balanceColor (balanceCheques.textContent, cheques);
  // message.textContent = "Thank You for Using This Service";
}

savings.withdraw.addEventListener ('click', withdrawSavings);
savings.deposit.addEventListener ('click', depositSavings);
cheques.withdraw.addEventListener ('click', withdrawCheques);
cheques.deposit.addEventListener ('click', depositCheques);
