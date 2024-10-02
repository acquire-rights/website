document.addEventListener('DOMContentLoaded', function() {
    // progress bar
    const raisedAmount = parseFloat(document.getElementById('raisedAmount').textContent.replace('$', '').replace(',', ''));
    const goalAmount = parseFloat(document.getElementById('goalAmount').textContent.replace('$', '').replace(',', ''));
    const progressBar = document.getElementById('donationProgress');

    const percentage = (raisedAmount / goalAmount) * 100;
    progressBar.value = percentage;
    progressBar.textContent = `${percentage.toFixed(2)}%`;
})