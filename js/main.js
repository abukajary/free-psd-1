window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let alert_info = document.getElementById('alert-info')
    alert_info.addEventListener('click', ()=> {
        alert_info.style.display = 'none';
    });

    let menu_btn = document.getElementById('menu-bars'),
        menu_links = document.getElementById('menu-links'),
        side_menu = document.querySelectorAll('.sideMenu')[0],
        kostyl = document.getElementById('kostyl'),
        menu_isOpen = false;

    menu_btn.addEventListener('click', ()=> {
        if (menu_isOpen) {
            menu_isOpen = false
            side_menu.classList.remove('mobile_menu')
            menu_links.classList.remove('mobile_menu')
            menu_links.style.display = 'none'
            side_menu.removeChild(menu_links)
            kostyl.appendChild(menu_links)
            // menu_links.style.display = 'flex'
        } else {
            menu_isOpen = true;
            side_menu.classList.add('mobile_menu')
            menu_links.style.display = 'flex'
            menu_links.classList.add('mobile_menu')
            side_menu.appendChild(menu_links)
        }
    });


    let showHideMenu((size920) => {

    });


    function showHideMenu(x) {
        if (size920.matches) {
            menu_links.style.display = 'none';
        } else {
            menu_links.style.display = 'flex';
        }
    }

    let size920 = window.matchMedia("(max-width: 920px)")
    showHideMenu(size920)
    size920.addListener(showHideMenu)

})