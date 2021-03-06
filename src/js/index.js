const btnStart = document.querySelector('.asr-btn-start')
const string = document.querySelector('#string')
const play = document.querySelectorAll('.track__play')
const asrBtn = document.querySelector('.asr-btn')

if (asrBtn) {
    asrBtn.addEventListener('click', e => {
        const btn = e.target
        if (btn.classList.contains('asr-btn-start')) {
            btn.classList.remove('asr-btn-start')
            btn.classList.add('asr-btn-loading')
            setTimeout(() => {
                btn.classList.remove('asr-btn-loading')
                btn.classList.add('asr-btn-pause')
                openMain()
            }, 2500)
        } else if (btn.classList.contains('asr-btn-pause')) {
            btn.classList.remove('asr-btn-pause')
            btn.classList.add('asr-btn-start')
        }
    })
}

if (string) {
    string.addEventListener('change', () => openMain())
}

if (play) {
    play.forEach(i => {
        i.addEventListener('click', e => {
            const btn = e.target
            !btn.classList.contains('pause') ? btn.classList.add('pause') : btn.classList.remove('pause') 
        })
    })
}

function openMain() {
    const main = document.querySelector('main')
    if (main) {
        !main.classList.contains('open') && main.classList.add('open') 
    }
}