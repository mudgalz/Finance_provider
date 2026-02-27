const myForm = document.getElementById("InterestForm");
const loan = document.getElementById("loan");
const rate = document.getElementById("rate");
const month = document.getElementById("month");
const btn = document.getElementById("btn");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const l = parseInt(loan.value);
  const r = parseInt(rate.value) / 12 / 100;

  const m = parseInt(month.value);
  const rate1 = r + 1;
  const power = Math.pow(rate1, m);
  const emi = (l * r * power) / (power - 1);
  window.alert("Your emi is " + Math.round(emi));
  loan.value = "";
  rate.value = "";
  month.value = "";
});

const loanForm = document.getElementById("loanForm");

const loanAmountBtn = document.getElementById("loanAmountBtn");
const loanAmountMenu = document.getElementById("loanAmountMenu");
const loanAmountInput = document.getElementById("loanAmount");

const loanTypeBtn = document.getElementById("loanTypeBtn");
const loanTypeMenu = document.getElementById("loanTypeMenu");
const loanTypeInput = document.getElementById("loanType");

// Handle Loan Amount selection
loanAmountMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("dropdown-item")) {
    loanAmountInput.value = e.target.textContent;
    loanAmountBtn.textContent = e.target.textContent;
  }
});

// Handle Loan Type selection
loanTypeMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("dropdown-item")) {
    loanTypeInput.value = e.target.textContent;
    loanTypeBtn.textContent = e.target.textContent;
  }
});

// Handle Form Submit
loanForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if dropdowns selected
  if (!loanAmountInput.value || !loanTypeInput.value) {
    alert("Please select Loan Amount and Loan Type");
    return;
  }

  const name = document.getElementById("fullName").value;
  const amount = parseInt(loanAmountInput.value);

  // Dummy EMI calculation (8% for 12 months)
  const annualRate = 8;
  const monthlyRate = annualRate / 12 / 100;
  const months = 12;

  const power = Math.pow(1 + monthlyRate, months);
  const emi = (amount * monthlyRate * power) / (power - 1);

  alert(
    "Hello " +
      name +
      "\n\nYour " +
      loanTypeInput.value +
      " of ₹" +
      amount.toLocaleString() +
      "\nEstimated EMI (1 year @8%) = ₹" +
      Math.round(emi).toLocaleString()
  );

  loanForm.reset();
  loanAmountBtn.textContent = "Select Loan Amount";
  loanTypeBtn.textContent = "Select Loan Type";
});

AOS.init();


