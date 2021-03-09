const player = document.querySelectorAll('[data-type=player]')
if (player.length !== 0) {
    player.forEach(item => {
        const audioPlayer = item.querySelector('[data-id=audio]')
        const audioDuration = item.querySelector('[data-type=duration]')
        audioPlayer.onloadedmetadata = e => {
            audioDuration.innerHTML = e.target.duration
        };        

        item.addEventListener('click', e => {
            const currentBtn = e.target
            const currentBtnType = currentBtn.dataset.type
            
            const roadLn = item.querySelector('[data-type=track]')
            const audioTime = item.querySelector('[data-type=time]')
            
            const road = item.querySelector('[data-type=track_fill]')
            const trackPositionX = e.pageX

            switch (currentBtnType) {
                case 'btn': {
                        if (currentBtn.classList.contains('pause')) {
                            audioPlayer.play()
                        } else {
                            audioPlayer.pause()
                        } 
                    }
                    break;
                case 'volume': {
                        currentBtn.classList.contains('mute') ? audioPlayer.muted = true : audioPlayer.muted = false
                    }
                    break;
                case 'track': {
                    const trackWidth = currentBtn.getBoundingClientRect().x + currentBtn.getBoundingClientRect().width
                    const trackPercent = 100 - (trackWidth - trackPositionX) / currentBtn.getBoundingClientRect().width * 100
                    const timeToGo = audioPlayer.duration * trackPercent / 100
                    audioPlayer.currentTime = timeToGo
                    }
                    break;
                case 'track_fill': {
                    const trackWidth = roadLn.getBoundingClientRect().x + roadLn.getBoundingClientRect().width
                    const trackPercent = 100 - (trackWidth - trackPositionX) / roadLn.getBoundingClientRect().width * 100
                    const timeToGo = audioPlayer.duration * trackPercent / 100
                    console.log(trackWidth, trackPercent, timeToGo)
                    audioPlayer.currentTime = timeToGo
                    }
                    break;
                default:
                    break;
            }

            audioPlayer.addEventListener('timeupdate', e => {
                const time = e.target.currentTime / e.target.duration * 100
                audioTime.innerHTML = e.target.currentTime
                road.style.width = Math.round(time) + '%'
            })
        })
    })
}