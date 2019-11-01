const portfolios = document.querySelector('.portfolios')

let startX
let scrollLeft
let isMouseDown = false
let scrollSpeed = 0.5

portfolios.addEventListener('mousedown', e => {
  console.log()
  isMouseDown = true
  startX = e.pageX - portfolios.offsetLeft
  scrollLeft = portfolios.scrollLeft
})

portfolios.addEventListener('mouseup', e => {
  isMouseDown = false
})

portfolios.addEventListener('mousemove', e => {
  if (!isMouseDown) return

  const x = e.pageX - portfolios.offsetLeft
  const walk = (x - startX) * scrollSpeed
  portfolios.scrollLeft = scrollLeft - walk
})
