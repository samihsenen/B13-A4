
const intBtns = document.querySelectorAll('.int-button');
const rjtBtns = document.querySelectorAll('.rjt-button');

intBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const badgesList = document.querySelectorAll('.status-badge');
        badgesList[index].innerText = 'INTERVIEW';
        badgesList[index].style.backgroundColor = '#e6fffa'; 
        badgesList[index].style.color = '#047857';

        applyFilter(window.currentActiveTab);
    });
});

rjtBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const badgesList = document.querySelectorAll('.status-badge');
        badgesList[index].innerText = 'REJECTED';
        badgesList[index].style.backgroundColor = '#fff5f5';
        badgesList[index].style.color = '#e53e3e';

        applyFilter(window.currentActiveTab);
    });
});