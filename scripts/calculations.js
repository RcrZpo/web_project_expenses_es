let budgetValue;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
}
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";
function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() <= budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
function calculateCategoryExpenses(category) {
  let total = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      total += expenseEntries[i][1];
    }
  }
  return total;
}
let categoriesData = [];
let highestCategory = ["", 0];
function calculateLargestCategory() {
  for (let i = 0; i < categoryNames.length; i++) {
    let category = categoryNames[i];
    let categoryTotal = calculateCategoryExpenses(category);
    categoriesData.push([category, categoryTotal]);
  }
  for (let i = 0; i < categoriesData.length; i++) {
    if (categoriesData[i][1] > highestCategory[1]) {
      highestCategory = categoriesData[i];
      console.log("Highest category:", highestCategory);
    }
  }
  return highestCategory[0];
}
function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue = totalExpensesValue + entry[1];
}
