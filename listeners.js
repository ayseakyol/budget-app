function eventListeners() {
  const budgetFeedback = document.querySelector(".budget-feedback"),
    expenseFeedback = document.querySelector(".expense-feedback"),
    budgetForm = document.getElementById("budget-form"),
    budgetInput = document.getElementById("budget-input"),
    budgetAmount = document.getElementById("budget-amount"),
    expenseAmount = document.getElementById("expense-amount"),
    balance = document.getElementById("balance"),
    balanceAmount = document.getElementById("balance-amount"),
    expenseForm = document.getElementById("expense-form"),
    expenseInput = document.getElementById("expense-input"),
    amountInput = document.getElementById("amount-input"),
    expenseList = document.getElementById("expense-list");
  // calculated values
  let list = [];
  let id = 0;
  //new instance of UI class
  const ui = new UI(
    budgetFeedback,
    expenseFeedback,
    budgetInput,
    budgetAmount,
    expenseAmount,
    balance,
    balanceAmount,
    expenseInput,
    amountInput,
    expenseList,
    list,
    id
  );
  //budget form submit form;
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  });
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitExpenseForm();
  });
  expenseList.addEventListener("click", function () {
    if (event.target.parentElement.classList.contains("edit-icon")) {
      ui.editExpense(event.target.parentElement);
    } else if (event.target.parentElement.classList.contains("delete-icon")) {
      ui.deleteExpense(event.target.parentElement);
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});
