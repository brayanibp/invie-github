const $burguerButton = document.getElementById('burguer-button')
const $menu = document.getElementById('menu')
let consulta = window.matchMedia('(max-width: 500px)')
let toggleMenu=()=>{$menu.classList.toggle('active')}

function mediaQuerie() {
    if (consulta.matches) {
        console.log('a')
        $burguerButton.addEventListener('touchstart',toggleMenu)
    } else {
        console.log('b')
        $burguerButton.removeEventListener('touchstart',toggleMenu)
    } 
}
consulta.addListener(mediaQuerie)
mediaQuerie()

var bLazy = new Blazy({
    selector: 'img'
});