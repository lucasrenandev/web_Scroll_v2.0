// Selecionando todos os links 
const menuItems = document.querySelectorAll("nav a")

// Adicionando evento de clique em todos os links
menuItems.forEach(item => {
    item.addEventListener("click", scrollById)
})

// Scroll por ID 
function scrollById(event) {
    event.preventDefault()
    const scrollSmooth = getScrollByHref(event.target) - 100
    scrollBehavior(scrollSmooth)
}

// Scroll suave
function scrollBehavior(Smooth) {
    window.scroll({
        top: Smooth,
        behavior: "smooth"
    })
}

// Buscando elemento por Href
function getScrollByHref(element) {
    const id = element.getAttribute("href")
    return document.querySelector(id).offsetTop
}