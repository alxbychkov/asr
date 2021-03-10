lottie.loadAnimation({
    container: document.querySelector('.media__wave'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'media/wave.json' // the path to the animation json
});

const elisa = lottie.loadAnimation({
  container: document.querySelector('.media__elisa'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'media/elisa.json' // the path to the animation json
});