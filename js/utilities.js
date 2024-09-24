// Shared utility functions
function getInputFieldValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getTheElementById(id) {
    return document.getElementById(id);
}

// Function to handle donation 
function handleDonation(inputId, currentDonationId, headingTextId, modalId) {
    const donationAmount = getInputFieldValueById(inputId);
    const currentDonation = getInnerTextValueById(currentDonationId);
    const myBalance = getInnerTextValueById('my-balance');

    // validation
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount');
        return;
    }

    if (myBalance < donationAmount) {
        alert('Insufficient balance to make this donation');
        return;
    }

    // Deduct donation from balance and add to current donation
    const newBalance = myBalance - donationAmount;
    const updatedDonation = currentDonation + donationAmount;

    // Update with new values
    const myBalanceElement = getTheElementById('my-balance');
    const currentDonationElement = getTheElementById(currentDonationId);
    const donationAmountElement = getTheElementById(inputId);
    myBalanceElement.innerText = newBalance.toFixed(2);
    currentDonationElement.innerText = updatedDonation.toFixed(2);
    donationAmountElement.value = '';

    // set history
    const headingText = getTheElementById(headingTextId).innerText;
    const historySection = getTheElementById('history-section');
    const date = new Date();
    const div = document.createElement('div');
    div.className = "border-2 space-y-3 px-4 mb-6 py-4";
    div.innerHTML = `
        <h2 class="text-xl font-semibold">${donationAmount} Taka is Donated for ${headingText}</h2>
        <p class="bg-slate-50">Date : ${date}</p>
    `;
    historySection.insertBefore(div, historySection.firstChild);

    // Show success modal
    getTheElementById(modalId).showModal();
}