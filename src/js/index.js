const btnStart = document.querySelector('.asr-btn-start')
const string = document.querySelector('#string')

if (string) {
    string.addEventListener('change', () => openMain())
}

if (btnStart) {
    btnStart.addEventListener('click', () => openMain())
}

function openMain() {
    const main = document.querySelector('main')
    if (main) {
        !main.classList.contains('open') && main.classList.add('open') 
    }
}