const menu = document.querySelector('.hamburger')
const sidebar = document.querySelector('.sidebar')

menu.addEventListener('click', () => {
    menu.classList.toggle("active")
    sidebar.classList.toggle("active")
    document.body.classList.toggle("active")
    

})