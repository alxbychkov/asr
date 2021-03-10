const scrollbox = document.querySelectorAll('[data-type=scrollbox]')

if (scrollbox.length !== 0) {
    scrollbox.forEach(item => {
        const track = item.querySelector('[data-type=scrollbox-track]')
        const trackBtn = item.querySelector('[data-type=scrollbox-btn]')
        const trackWidth = track.getBoundingClientRect().width
        const trackBtnWidth = trackBtn.getBoundingClientRect().width
        const maxPos = trackWidth - trackBtnWidth - 1;
        const startPos = -1;

        item.addEventListener('click', e => {
            const posX = e.pageX
            const trackPosWidth = track.getBoundingClientRect().x + trackWidth
            const trackPercent = 100 - (trackPosWidth - posX) / trackWidth * 100
            const textPos = 24 * trackPercent / 100 - 12
            const leftPos = 125 * trackPercent / 100 - 1
            trackBtn.innerHTML = textPos.toFixed(1)
            track.style.boxShadow = `inset ${-150 + Math.floor(leftPos) + 25}px 0 rgb(255,255,255)`
            trackBtn.style.left = Math.floor(leftPos) + 'px'
        })

        trackBtn.addEventListener('mousedown', e => {
            document.addEventListener('mousemove', listener)
        })

        trackBtn.addEventListener('mouseup', e => {
            document.removeEventListener('mousemove', listener)
        });

        trackBtn.addEventListener('mouseover', e => {
            document.removeEventListener('mousemove', listener)
        })

        const listener = e => {
            const posX = e.pageX
            const trackPosWidth = track.getBoundingClientRect().x + trackWidth
            const trackPercent = 100 - (trackPosWidth - posX) / trackWidth * 100
            const leftPos = 125 * trackPercent / 100 - 1
            const textPos = 24 * trackPercent / 100 - 12

            if (posX >= track.getBoundingClientRect().x && posX <= trackPosWidth) {
                trackBtn.style.left = Math.floor(leftPos) + 'px'
                trackBtn.innerHTML = textPos.toFixed(1)
                track.style.boxShadow = `inset ${-150 + Math.floor(leftPos) + 25}px 0 rgb(255,255,255)`
            }
        };
    })
}