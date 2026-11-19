let budgetValue = 0;
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

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let largestCategory = categories[0];
  let largestTotal = calculateCategoryExpenses(largestCategory);

  for (const category of categories) {
    const categoryTotal = calculateCategoryExpenses(category);
    if (categoryTotal > largestTotal) {
      largestTotal = categoryTotal;
      largestCategory = category;
    }
  }
  return largestCategory;
}
function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue = totalExpensesValue + entry[1];
}
