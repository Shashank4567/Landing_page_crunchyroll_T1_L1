"use strict";

const modal = document.querySelector(".modal");
const creditCardForm = document.querySelector(".ccform");

const containerPurchaseSuccessful = document.querySelector(
  ".purchase-successful-container"
);

const btnTryPlan = document.querySelectorAll(".try-plan-btn");
const btnBuyPremium = document.querySelector(".buy-premium-btn");
const btnContinue = document.querySelector(".purchase-success-continue-btn");

const modalPremiumPriceText = document.querySelector(".premium-price-text");

const inputCardNumber = document.querySelector(".cardnumber");
const inputCVV = document.querySelector(".cvv");
const inputZipCode = document.querySelector(".zip");

inputCardNumber.addEventListener("keypress", function (e) {
  if (isNaN(+String.fromCharCode(e.keyCode))) return;

  switch (inputCardNumber.value.length) {
    case 4:
      inputCardNumber.value += " ";
      break;
    case 9:
      inputCardNumber.value += " ";
      break;
    case 14:
      inputCardNumber.value += " ";
      break;
  }
});

creditCardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  containerPurchaseSuccessful.classList.remove("hidden");
});

btnContinue.addEventListener("click", function () {
  overlay.classList.add("hidden");
  containerPurchaseSuccessful.classList.add("hidden");
});
