const btnStart = document.querySelector('.asr-btn-start')
const string = document.querySelector('#string')
const play = document.querySelectorAll('.track__play')
const volume = document.querySelectorAll('.track__volume')
const asrBtn = document.querySelector('.asr-btn')
const resultBody = document.querySelector('[data-type="content"]')
const main = document.querySelector('main')

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
                if (main && main.classList.contains('open')) {
                    elisa.stop()
                }
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

if (volume) {
    volume.forEach(i => {
        i.addEventListener('click', e => {
            const btn = e.target
            const volumeInput = btn.parentNode.querySelector('[data-type=volume_range]')
            const volumeValue = volumeInput.value

            if (!btn.classList.contains('mute')) {
                btn.classList.add('mute')
                volumeInput.dataset.volume = volumeInput.value
                volumeInput.value = 0
            } else {
                btn.classList.remove('mute')
                volumeInput.value = volumeInput.dataset.volume
            } 
        })
    })
}

if (resultBody) {
    resultBody.addEventListener('click', e => {
        if (e.target.dataset.type === 'open') {
            const body = e.target.parentNode
            body.classList.contains('open') ? body.classList.remove('open') : body.classList.add('open')
        }
    })

    // resultBody.addEventListener('dblclick', e => {
    //     if (e.target.tagName === 'P' && e.target.parentNode.dataset.type === 'asr-text') {
    //         const p = e.target;
    //         const html = p.innerHTML;
    //         const range = window.getSelection() || document.getSelection() || document.selection.createRange();
    //         const startPos = range.focusOffset;
    //         const selectedWord = range.toString().trim();
    //         const newHtml = '<span>' + html.substring(0, startPos) + '<i class=\"touched\">' + selectedWord + '</i>' + ' ' + html.substring(startPos + selectedWord.length) + '</span>';
    //         p.innerHTML = '';
    //         p.innerHTML = newHtml;
    //     }
    // })
}

function openMain() {
    const main = document.querySelector('main')
    if (main) {
        !main.classList.contains('open') && main.classList.add('open') 
    }
}