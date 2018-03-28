const $body = document.body;
const $burguerButton = document.getElementById('burguer-button')
const $menu = document.getElementById('menu')
let consulta = window.matchMedia('(max-width: 500px)')
let toggleMenu=()=>{$menu.classList.toggle('active')}
let showMenu=()=>{$menu.classList.add('active')}
let hideMenu =()=>{$menu.classList.remove('active')}
function mediaQuerie() {
    if (consulta.matches) {
        $burguerButton.addEventListener('touchstart',toggleMenu)
    } else {
        $burguerButton.removeEventListener('touchstart',toggleMenu)
    } 
}

consulta.addListener(mediaQuerie)
mediaQuerie()

var bLazy = new Blazy({
    selector: 'img'
});
let gestos = new Hammer($body);
gestos.on('swipeleft',hideMenu)
gestos.on('swiperight',showMenu)