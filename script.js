document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('expense-form').addEventListener('submit', addExpense);
    document.getElementById('income-form').addEventListener('submit', addIncome);
    document.getElementById('investment-form').addEventListener('submit', addInvestment);
    document.getElementById('stock-name').addEventListener('input', fetchLiveStockPrice);
});

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Expenses
function addExpense(e) {
    e.preventDefault();
    const expenseEntry = {
        date: e.target[0].value,
        description: e.target[1].value,
        amount: e.target[2].value,
        paymentMethod: e.target[3].value,
        notes: e.target[4].value
    };
    renderExpenseEntry(expenseEntry);
}

function renderExpenseEntry(entry) {
    const expenseEntries = document.getElementById('expense-entries');
    const row = document.createElement('div');
    row.classList.add('entry-row');
    row.innerHTML = `
        <span>${entry.date}</span>
        <span>${entry.description}</span>
        <span>${entry.amount}</span>
        <span>${entry.paymentMethod}</span>
        <span>${entry.notes}</span>
        <button class="edit-btn" onclick="editEntry(this)">Edit</button>
        <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    expenseEntries.appendChild(row);
}

// Income
function addIncome(e) {
    e.preventDefault();
    const incomeEntry = {
        date: e.target[0].value,
        source: e.target[1].value,
        amount: e.target[2].value,
        notes: e.target[3].value
    };
    renderIncomeEntry(incomeEntry);
}

function renderIncomeEntry(entry) {
    const incomeEntries = document.getElementById('income-entries');
    const row = document.createElement('div');
    row.classList.add('entry-row');
    row.innerHTML = `
        <span>${entry.date}</span>
        <span>${entry.source}</span>
        <span>${entry.amount}</span>
        <span>${entry.notes}</span>
        <button class="edit-btn" onclick="editEntry(this)">Edit</button>
        <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    incomeEntries.appendChild(row);
}

// Investments
function addInvestment(e) {
    e.preventDefault();
    const investmentEntry = {
        date: e.target[0].value,
        type: e.target[1].value,
        quantity: e.target[2].value,
        investedValue: e.target[3].value,
        stockName: e.target[4].value,
        currentValue: document.getElementById('live-share-value').value,
        notes: e.target[5].value
    };
    renderInvestmentEntry(investmentEntry);
}

function renderInvestmentEntry(entry) {
    const investmentEntries = document.getElementById('investment-entries');
    const row = document.createElement('div');
    row.classList.add('entry-row');
    row.innerHTML = `
        <span>${entry.date}</span>
        <span>${entry.type}</span>
        <span>${entry.quantity}</span>
        <span>${entry.investedValue}</span>
        <span>${entry.currentValue}</span>
        <span>${entry.notes}</span>
        <button class="edit-btn" onclick="editEntry(this)">Edit</button>
        <button class="delete-btn" onclick="deleteEntry(this)">Delete</button>
    `;
    investmentEntries.appendChild(row);
}

// Fetch live stock price based on stock name input
function fetchLiveStockPrice(e) {
    const stockName = e.target.value;
    if (stockName.length > 0) {
        // Example of fetching live data from an API
        // Replace this with actual API call to get the stock price
        const livePrice = Math.random