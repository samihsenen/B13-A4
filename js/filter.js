window.currentActiveTab = 'ALL'; 

function applyFilter(filter) {
    window.currentActiveTab = filter;
    const cards = document.querySelectorAll('.job-card'); 
    const emptyMsg = document.getElementById('empty-message');
    let hasJobs = false; 

    cards.forEach(card => {
        const badge = card.querySelector('.status-badge');
        const status = badge ? badge.innerText.trim().toUpperCase() : "";
        
        if (filter === 'ALL' || status === filter) {
            card.style.display = 'block';
            hasJobs = true; 
        } else {
            card.style.display = 'none';
        }
    });

    if (hasJobs) {
        emptyMsg.classList.add('hidden'); 
        emptyMsg.classList.remove('flex');
    } else {
        emptyMsg.classList.remove('hidden'); 
        emptyMsg.classList.add('flex');      
    }

 
    const btns = [document.getElementById('all'), document.getElementById('interview'), document.getElementById('rejected')];
    btns.forEach(btn => {
        if(btn) btn.classList.replace('btn-primary', 'btn-outline');
    });
    const activeBtn = document.getElementById(filter.toLowerCase());
    if (activeBtn) activeBtn.classList.replace('btn-outline', 'btn-primary');

   
    if (typeof updateAvailableJobsText === 'function') {
        updateAvailableJobsText(filter);
    }
}

document.getElementById('all').addEventListener('click', () => applyFilter('ALL'));
document.getElementById('interview').addEventListener('click', () => applyFilter('INTERVIEW'));
document.getElementById('rejected').addEventListener('click', () => applyFilter('REJECTED'));