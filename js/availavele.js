function updateAvailableJobsText(filterName) {
    const currentFilter = filterName.toUpperCase();
    let visibleCount = 0;
    
    const totalDisplay = document.getElementById('total');
    const currentTotalCount = totalDisplay ? totalDisplay.innerText : "0";
    const allCards = document.querySelectorAll('.job-card'); 

    allCards.forEach(card => {
        const badge = card.querySelector('.status-badge');
        const status = badge ? badge.innerText.trim().toUpperCase() : "";

        if (currentFilter === 'ALL' || status === currentFilter) {
            visibleCount++;
        }
    });

    const statText = document.getElementById('job-stat-text');
    if (statText) {
        if (currentFilter === 'ALL') {
            statText.innerText = `${currentTotalCount} jobs`;   
        } else {
            statText.innerText = `${visibleCount} of ${currentTotalCount} jobs`;  
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    updateAvailableJobsText('ALL');
});