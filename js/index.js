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
AOS.init();
