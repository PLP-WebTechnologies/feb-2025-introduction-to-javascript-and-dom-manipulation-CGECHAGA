// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    if (dynamicText.textContent.includes('change')) {
        dynamicText.textContent = 'The text has been changed successfully!';
        dynamicText.style.color = 'green';
    } else {
        dynamicText.textContent = 'This text will change when you click the button below.';
        dynamicText.style.color = '';
    }
});

// Modify CSS styles via JavaScript
const styleDemo = document.getElementById('style-demo');

styleDemo.addEventListener('mouseover', () => {
    styleDemo.style.backgroundColor = '#f0f0f0';
    styleDemo.style.border = '2px solid #333';
    styleDemo.style.transform = 'scale(1.05)';
    styleDemo.style.transition = 'all 0.3s ease';
});

styleDemo.addEventListener('mouseout', () => {
    styleDemo.style.backgroundColor = '';
    styleDemo.style.border = '';
    styleDemo.style.transform = '';
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggledElement = document.getElementById('toggled-element');
const toggleContainer = document.getElementById('toggle-container');

let elementExists = true;

toggleElementBtn.addEventListener('click', () => {
    if (elementExists) {
        toggleContainer.removeChild(toggledElement);
        toggleElementBtn.textContent = 'Add Element';
    } else {
        toggleContainer.appendChild(toggledElement);
        toggleElementBtn.textContent = 'Remove Element';
    }
    elementExists = !elementExists;
});