let balance = 5000; // Initial balance

function showDashboard() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const balanceCard = document.createElement("div");
  balanceCard.className = "card";
  balanceCard.innerHTML = `
    <h2>Balance Enquiry</h2>
    <p>Your current balance is:</p>
    <p><strong>₹${balance}</strong></p>
  `;

  const depositCard = document.createElement("div");
  depositCard.className = "card";
  depositCard.innerHTML = `
    <h2>Deposit Money</h2>
    <input type="number" id="deposit-amount" placeholder="Enter amount to deposit" />
    <button onclick="depositMoney()">Deposit</button>
    <div id="deposit-msg"></div>
  `;

  const withdrawCard = document.createElement("div");
  withdrawCard.className = "card";
  withdrawCard.innerHTML = `
    <h2>Withdraw Money</h2>
    <input type="number" id="withdraw-amount" placeholder="Enter amount to withdraw" />
    <button onclick="withdrawMoney()">Withdraw</button>
    <div id="withdraw-msg"></div>
  `;

  root.appendChild(balanceCard);
  root.appendChild(depositCard);
  root.appendChild(withdrawCard);
}

function depositMoney() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  const msgDiv = document.getElementById("deposit-msg");
  msgDiv.innerHTML = "";

  if (isNaN(amount) || amount <= 0) {
    showMessage(msgDiv, "Please enter a valid amount.", "error");
    return;
  }

  balance += amount;
  showDashboard();
  showMessage(msgDiv, `₹${amount} deposited successfully!`, "success");
}

function withdrawMoney() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  const msgDiv = document.getElementById("withdraw-msg");
  msgDiv.innerHTML = "";

  if (isNaN(amount) || amount <= 0) {
    showMessage(msgDiv, "Please enter a valid amount.", "error");
    return;
  }

  if (amount > balance) {
    showMessage(msgDiv, "Insufficient funds!", "error");
    return;
  }

  balance -= amount;
  showDashboard();
  showMessage(msgDiv, `₹${amount} withdrawn successfully!`, "success");
}

function showMessage(div, message, type) {
  div.className = `message ${type}`;
  div.textContent = message;
  setTimeout(() => {
    div.textContent = "";
    div.className = "message";
  }, 3000);
}

// Load Dashboard initially
showDashboard();
