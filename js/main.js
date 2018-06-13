// window.onload = function setFocusToTextBox() {
//     searchBar.focus();
// }

// Barba.Pjax.start();

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const firstLine = document.querySelector('.first')
const secondLine = document.querySelector('.second')
const searchBar = document.querySelector('#search_inputs')
const dropdown = document.querySelector('.dropdown')

hamburger.addEventListener('mouseup', function(){
    
    secondLine.classList.toggle('collapse')
    // menu.classList.toggle('open-menu')
    
    
})


document.addEventListener('DOMContentLoaded', function () {
    searchBar.addEventListener('focus', function () {
        setTimeout(() => {

            dropdown.classList.add('show-dropdown')
            
        }, 500);
    });
    searchBar.addEventListener('blur', function(){
        dropdown.classList.remove('show-dropdown')
    })
});


