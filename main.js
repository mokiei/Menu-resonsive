/*===== Menu show Y hidden =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

    /*===== Show =====*/
    toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

    /*===== Hidden =====*/
    closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        // Active link
        navLink.ForEach(n => n.classList.remove('active'))
        this.classList.add('active')
        //Remove menu mobile
        navMenu.classList.remove('show')
    }
    navLink.gorEach(n => n.addEventListener('click', linkAction))