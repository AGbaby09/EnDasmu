const menu = document.getElementById('logo').getElementsByTagName('i')[0];
const nav = document.getElementsByTagName('nav')[0];
// console.log(menu.className = 'm')

const menuAction = () => {
    menu.addEventListener('click', ()=>{
        if(nav.classList.contains('h-nav')){
            nav.classList.remove('h-nav');
            nav.classList.add('s-nav');
            menu.className = 'bx bx-window-close';
        }else{
            nav.classList.remove('s-nav');
            nav.classList.add('h-nav');
            menu.className = 'bx bx-menu';
        }
    })
}
menuAction();