const toggleIcons = document.querySelectorAll('.plus-icon');
const hiddenTexts = document.querySelectorAll('.hidden-text');

toggleIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const hiddenText = hiddenTexts[index]; 
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block';
            icon.src = './assets/images/icon-minus.svg'; // Change to minus icon
        } else {
            hiddenText.style.display = 'none';
            icon.src = './assets/images/icon-plus.svg'; // Change back to plus icon
        }
    });
});
