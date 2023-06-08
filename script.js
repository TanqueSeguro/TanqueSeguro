function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function writeString(string, element) {
  const spanStyle = getComputedStyle(
    document.querySelector('main .home .title h1+h1')
  )
  if (spanStyle.display == 'none') {
    element.textContent = string
  } else {
    let index = 0

    function write() {
      if (index < string.length) {
        element.textContent += string.charAt(index)
        index++
        setTimeout(write, 100)
      }
    }
    write()
  }
}

const text = 'Detecção. Proteção. Confiança.'
const element = document.querySelector('#home .home h1.title-text')

const video = document.querySelector('.load video')
video.autoplay = true
setTimeout(loadPage, 3500)

async function loadPage() {
  document.body.classList.remove('loading')
  document.querySelector('.load').classList.add('op')
  await sleep(400)
  document.querySelector('.load').remove()
  setTimeout(writeString(text, element), 100)
}
