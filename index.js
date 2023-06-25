"use strict";
const submitButton = document.querySelector('[type="button"]');
const spanEl = document.querySelector('#result');
const mainDocu = document.getElementsByTagName('main')[0];
submitButton.addEventListener('click', () => {
    disp_result();
    mainDocu.classList.add('close');
});
function disp_result() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.checked) {
            spanEl.textContent = input.value;
        }
    });
}
function log(data) {
    console.log(data);
}
