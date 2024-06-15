let buttonOpen = document.querySelector(".new")
let modal = document.querySelector(".modal")

buttonOpen.addEventListener('click', function () {
    modal.classList.add("modal__show")
})

let buttonClose = document.querySelector(".modal__close") 

buttonClose.addEventListener('click', function () {
    modal.classList.remove("modal__show")
})