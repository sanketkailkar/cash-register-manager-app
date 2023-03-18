const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const nextBtn = document.querySelector('#next-btn');
const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const hideCash = document.querySelector('.hide-cash');

const availableNotes = [2000,500,100,20,10,5,1];

hideCashGiven();
nextBtn.addEventListener("click", function(){
    if (billAmount.value > 0) {
        showCashGiven();
        hideMessage();
    }else{
        showMessage("Bill amount should be greater than 0");
    }
});

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
    if (cashGiven.value >= billAmount.value) {
        hideMessage();
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    } else {
        showMessage("Cash should greater or equal to bill amount");
    }
});

function calculateChange(amountToBeReturned){
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText  = numberOfNotes;
    }
};

function hideCashGiven() {
    hideCash.style.display="none";
};
function showCashGiven() {
    hideCash.style.display="flex";
};

function hideMessage() {
    message.style.display = "none";
};
function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
};
