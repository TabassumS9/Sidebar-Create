
let span = document.querySelector('nav span')
span.addEventListener('click',sideToggle)
let side = document.querySelector('.sidebar')
function sideToggle(){
    side.classList.toggle('active')
}