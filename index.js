// navbar menu variable decleared
const open = document.querySelector('.open')
const close = document.querySelector('.close')
const navbar = document.querySelector('.navbar')

// navbar menuBtn start
open.addEventListener('click', () => {
  navbar.style.display = 'block'
  open.style.display = 'none'
  close.style.display = 'block'

})

close.addEventListener('click', () => {
  navbar.style.display = 'none'
  close.style.display = 'none'
  open.style.display = 'block'
})
// navbar menuBtn end