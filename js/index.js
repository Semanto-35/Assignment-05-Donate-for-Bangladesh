
// Blog button
const blogButton = document.getElementById('blog-button');
blogButton.addEventListener('click', function () {
    window.location.href = 'blog.html';
});

// Donation button
document.getElementById('donation-button').addEventListener('click', function () {
    document.getElementById('donation-button').classList.add('bg-[#B4F461]', 'font-semibold');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]');
    document.getElementById('history-button').classList.add('font-normal');

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});

// History button
document.getElementById('history-button').addEventListener('click', function () {
    document.getElementById('history-button').classList.add('bg-[#B4F461]');
    document.getElementById('history-button').classList.remove('font-normal');
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]', 'font-semibold');
    document.getElementById('donation-button').classList.add('font-normal',);

    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('hidden');
});


// Event listeners for donate now buttons
document.getElementById('donate-button-Noakhali').addEventListener('click', function () {
    handleDonation('donation-input-noakhali', 'current-donation-1', 'heading-text-1', 'Noakhali');
});

document.getElementById('donate-button-feni').addEventListener('click', function () {
    handleDonation('donation-input-feni', 'current-donation-2', 'heading-text-2', 'feni');
});

document.getElementById('donate-button-quota').addEventListener('click', function () {
    handleDonation('donation-input-quota', 'current-donation-3', 'heading-text-3', 'quota');
});