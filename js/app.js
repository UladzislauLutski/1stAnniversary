// 3D Scroll

let zSpacing = -1200,
  lastPos = zSpacing / 6,
  zVals = [];


function handleWindowScroll() {
  let top = document.documentElement.scrollTop;
  const delta = lastPos - top;

  lastPos = top;

  const frames = Array.from(document.querySelectorAll('.frame'))

  frames.forEach(function (n, i) {
    zVals[i] += delta * -2;

    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;

    frame.style.transform = `${transform}`
    frame.style.opacity = `${opacity}`
  });

}

document.addEventListener('scroll', handleWindowScroll);

document.addEventListener('DOMContentLoaded', function () {
  document.documentElement.scrollTo(0, 2);

  const frames = Array.from(document.querySelectorAll('.frame'))

  frames.forEach((frame, index) => {
    zVals.push((index * zSpacing) + zSpacing);
    frame.style.visibility = 'visible'
    frame.style.opacity = '1'
    frame.style.zIndex = -index
  })
})


// Audio

let soundButton = document.querySelector('.soundbutton'),
	audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused')
	audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function () {
	soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function () {
	audio.pause()
}
