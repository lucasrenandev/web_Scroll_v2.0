// Selecionando todos os links 
const menuItems = document.querySelectorAll("nav a")

// Adicionando evento de clique em todos os links
menuItems.forEach(item => {
    item.addEventListener("click", scrollById)
})

// Scroll por ID 
function scrollById(event) {
    event.preventDefault()
    const scroll = getScrollByHref(event.target) - 100
    scrollBehavior(scroll)
}

// Scroll suave
function scrollBehavior(Behavior) {
    window.scroll({
        top: Behavior,
        behavior: "smooth"
    })
}

// Buscando elemento por Href
function getScrollByHref(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}