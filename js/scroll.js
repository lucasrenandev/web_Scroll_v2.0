// Selecionando todos os links 
const menuItems = document.querySelectorAll("nav a")

// Adicionando evento de clique em todos os links
menuItems.forEach(item => {
    item.addEventListener("click", scrollById)
})

// Scroll por ID 
function scrollById(event) {
    event.preventDefault()
    const scroll = getScrollIdByHref(event.target) - 100
    scrollToPosition(scroll)
}

// Scroll suave
function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

// Buscando elemento por Href
function getScrollIdByHref(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}