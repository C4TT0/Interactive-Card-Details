let nameInp = document.getElementById("name");
let cardNo = document.getElementById("card-no");
let expMonth = document.getElementById("month");
let expYear = document.getElementById("year");
let cvv = document.getElementById("cvv-inp");

let form = document.querySelector("form");
let thank = document.querySelector(".thank")
let continueE = document.getElementById("continue")

let cardName = document.getElementById("card-name");
let cardNum = document.getElementById("card-number");
let cardExpMonth = document.getElementById("monthD");
let cardExpYear = document.getElementById("yearD");
let cardCvv = document.getElementById("cvv");

let nameErrText = document.getElementById("nameErrText")
let numErrText = document.getElementById("numErrText")
let expErrText = document.getElementById("expErrText")
let cvvErrText = document.getElementById("cvvErrText")

nameInp.addEventListener("input", (e) => {
  if (e.target.value) cardName.innerText = e.target.value;
  else cardName.innerText = "Jane Appleseed";
});

cardNo.addEventListener("input", (e) => {
  if (!e.target.value) cardNum.innerText = "0000 0000 0000 0000";
  else {
    let cardNumberInput = e.target.value;

    // Remove any non-digit character and spaces from string
    cardNumberInput = cardNumberInput.replace(/\D/g, "");
    cardNumberInput = cardNumberInput.replace(/(.{4})(?!$)/g, "$1 ");

    cardNum.innerText = cardNumberInput;
  }
});

expMonth.addEventListener("input", (e) => {
  if (!e.target.value) cardExpMonth.innerText = "00";
  else {
    if (e.target.value.length === 1) {
      cardExpMonth.innerText = `0${e.target.value}`;
    } else {
      cardExpMonth.innerText = e.target.value;
    }
  }
});

expYear.addEventListener("input", (e) => {
  if (!e.target.value) cardExpYear.innerText = "00";
  else {
    cardExpYear.innerText = e.target.value;
  }
});

cvv.addEventListener("input", (e) => {
  if (!e.target.value) cardCvv.innerText = "000";
  else {
    cardCvv.innerText = e.target.value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Perform Validation

  if (!nameInp.value) {
    nameInp.classList.add("err");
    nameErrText.innerText = "Can't be blank"
    return
  } else {
    nameInp.classList.remove("err")
    nameErrText.innerText = ""
  }
  if (!cardNo.value || isNaN(Number(cardNo.value.replace(/\s/g, ""))) || cardNo.value.length != 16) {
    cardNo.classList.add("err");
    if(!cardNo.value) numErrText.innerText = "Can't be blank"
    else if(cardNo.value.length != 16) numErrText.innerText = "Card No needs to be of 16 characters"
    else numErrText.innerText = "Wrong format, numbers only" 
    return
  }else {
    cardNo.classList.remove("err")
    numErrText.innerText = ""
  }
  if (
    !expMonth.value ||
    isNaN(Number(expMonth.value.replace(/\s/g, ""))) ||
    expMonth.value <= 0 ||
    expMonth.value > 12
  ) {
    expMonth.classList.add("err");
    expErrText.innerText = !expMonth.value ? "Can't be blank" : "Invalid Input"
    return
  }else {
    expMonth.classList.remove("err")
    expErrText.innerText = ""
  }
  if (!expYear.value || isNaN(Number(expYear.value.replace(/\s/g, "")))) {
    expYear.classList.add("err");
    expErrText.innerText = !expYear.value ? "Can't be blank" : "Invalid Input"
    return
  }
  else {
    expYear.classList.remove("err")
    expErrText.innerText = ""
  }
  if (!cvv.value || isNaN(Number(cvv.value.replace(/\s/g, ""))) || cvv.value.length != 3) {
    cvv.classList.add("err");
    cvvErrText.innerText = !cvv.value ? "Can't be blank" : "Invalid Input"
    return
  }else {
    cvv.classList.remove("err")
    cvvErrText.innerText = ""
  }

  form.classList.add("hide")
  thank.classList.remove("hide")
});

continueE.addEventListener("click", () => {
    form.classList.remove("hide")
    thank.classList.add("hide")
})