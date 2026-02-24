document.querySelectorAll('.trash-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        const card = this.closest('.job-card'); 
        if (card) {
            card.remove();
            
            
            const totalDisplay = document.getElementById('total');
            let count = parseInt(totalDisplay.innerText);
            if (count > 0) {
                totalDisplay.innerText = count - 1;
            }

            
            applyFilter(window.currentActiveTab);
            updateAvailableJobsText(window.currentActiveTab);
        }
    });
});