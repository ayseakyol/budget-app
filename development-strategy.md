# Budget-App: Development Strategy

Building this site one step at a time

---

## 0. Development-Strategy

- Include a License
- Include this `development.md` file

---

## 1. Setup

- Create boilerplate index.html

---

## 2. User Story: Display Forms

**A user can see which forms will fullfill**

### DOM:

- Create one form to write budget
- Create one form to write expenses
- create one form to show balance betwwen budget and expenses

---

## 3. User Story: Select form, inputs and feedback boxes

- Write constructor of `class UI` for using them.

### Listeners:

- Attach a `submit` event to the `submitBudgetForm` and `submitExpenseForm`.

### Handlers:

- Create a `submitBudgetForm`, `submitExpenseForm` and `addExpense` event handler that add to the HTML.
- Show the alert feedback box when budget or expense become 0 or negative.

---

## 4. User Story: Expenses can be edited and deleted

**A user can edit or delete her expenses**

### Listeners:

- Attach a `click` event to the `editExpense` and `deleteExpense`.

### Handlers:

- Create a `editExpense` event handler that can again show the expenses on the expense form and change the amount.
- Create a `deleteExpense` event handler that can delete the expense item whatever the user wants.

---

## 5. User Story: Show Balance

**A user can see the balance between his budget and expenses**

### Handlers:

- Create a `showBalance` handler to show the difference between budget and expense.

### Styles:

- Create styles for showing balance with green, black and red.

---

## 6. User Story: See Beauty

**A user can use a well-styled page**

### Assets:

- Add the icons to the forms
- Use bootstrap for beter styled page.

### Styles:

- Create styles for the page design

---
