const badges = document.querySelectorAll('.badge');
const intButtons = document.querySelectorAll('.int-button');
const rjtButtons = document.querySelectorAll('.rjt-button');

const intDisplay = document.getElementById('int-count');
const rjtDisplay = document.getElementById('rjt-count');

let intCount = 0;
let rjtCount = 0;


intButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const targetBadge = badges[index];

     
        if (targetBadge.innerText === 'INTERVIEW') return;

      
        if (targetBadge.innerText === 'REJECTED') {
            rjtCount--;
            rjtDisplay.innerText = rjtCount;
            rjtButtons[index].classList.remove('btn-disabled'); 
        }

    
        intCount++;
        intDisplay.innerText = intCount;

       
        targetBadge.innerText = 'INTERVIEW';
        updateBadgeStyle(targetBadge, 'success', '#e6fffa', '#047857');


        this.classList.add('btn-disabled');
        rjtButtons[index].classList.remove('btn-disabled');
    });
});


rjtButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const targetBadge = badges[index];

  
        if (targetBadge.innerText === 'REJECTED') return;

        if (targetBadge.innerText === 'INTERVIEW') {
            intCount--;
            intDisplay.innerText = intCount;
            intButtons[index].classList.remove('btn-disabled');
        }

        
        rjtCount++;
        rjtDisplay.innerText = rjtCount;

      
        targetBadge.innerText = 'REJECTED';
        updateBadgeStyle(targetBadge, 'error', '#fff5f5', '#e53e3e');

        
        this.classList.add('btn-disabled');
        intButtons[index].classList.remove('btn-disabled');
    });
});

function updateBadgeStyle(element, type, bg, text) {
    element.classList.remove('badge-primary', 'badge-outline', 'badge-success', 'badge-error');
    element.classList.add(`badge-${type}`);
    element.style.backgroundColor = bg;
    element.style.color = text;
}