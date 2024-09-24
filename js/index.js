
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