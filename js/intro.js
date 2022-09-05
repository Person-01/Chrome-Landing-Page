let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let login = document.querySelector('.login');

window.addEventListener('DOMContentLoaded', ()=>{
    login.style.display = "none";
    logo.classList.add('active');
    setTimeout(()=>{
        logo.classList.remove('active');
        logo.classList.add('fade');
    }, 500)
    setTimeout(()=>{
        intro.style.opacity = 0;
        intro.style.zIndex = "-999";
        document.body.style.backgroundColor = "white";
        login.style.display = "block";
    }, 500)
})
