const player = document.querySelectorAll('[data-type=player]')
if (player.length !== 0) {
    player.forEach(item => {
        const audioPlayer = item.querySelector('[data-id=audio]')
        const audioDuration = item.querySelector('[data-type=duration]')

        if (audioDuration) {
            audioPlayer.onloadedmetadata = e => {
                audioDuration.innerHTML = e.target.duration
            };
        }        

        item.addEventListener('click', e => {
            const currentBtn = e.target
            const currentBtnType = currentBtn.dataset.type
            
            const roadLn = item.querySelector('[data-type=track]')
            const audioTime = item.querySelector('[data-type=time]')

            const volumeRange = item.querySelector('[data-type=volume_range]')
            const volumeIcon = item.querySelector('[data-type=volume]')

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
                case 'volume_range': {
                        console.log(currentBtn.value)
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
                    audioPlayer.currentTime = timeToGo
                    }
                    break;
                default:
                    break;
            }

            if (volumeRange) {
                volumeRange.addEventListener('input', e => {
                    const volume = e.target.value
                    audioPlayer.volume = volume / 100
                    if (volume == 0) {
                        volumeIcon.classList.contains('mute') || volumeIcon.classList.add('mute')
                    } else {
                        !volumeIcon.classList.contains('mute') || volumeIcon.classList.remove('mute')
                    }
                })
            }

            audioPlayer.addEventListener('timeupdate', e => {
                const time = e.target.currentTime / e.target.duration * 100
                if (audioTime) {
                    audioTime.innerHTML = e.target.currentTime
                }
                road.style.width = Math.round(time) + '%'
            })
        })
    })
}