var lien_burger = document.querySelector('#burger-link')
var burger = document.querySelector('#burger')
var menu = document.querySelector('#menu')
var itemMenu = document.querySelectorAll('.item-nav')
var header = document.querySelector("header")
var toggleDM = document.querySelector('#slideThree')
var body = document.querySelector('body')

lien_burger.addEventListener('click', function(e) {
    burger.classList.toggle('open')
    menu.classList.toggle('open')
    itemMenu.forEach(element => element.classList.toggle('open'))
})

toggleDM.addEventListener('click', function() {
  if (toggleDM.checked == true) {
    body.classList.add('darkmode')
  }
  else {
    body.classList.remove('darkmode')
  }
})