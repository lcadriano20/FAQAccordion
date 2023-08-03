// CAPTURAR ELEMENTOS 
const headers = document.querySelectorAll('.accordion-header')
const accordionContent = document.querySelectorAll('.accordion-item')


headers.forEach(function (header){
   header.addEventListener('click',showAnswer)
})


function showAnswer() {
    const item = this.parentNode;
    const isActive = item.classList.contains("accordion-item--active")

    accordionContent.forEach(function(item) {
        item.classList.remove("accordion-item--active")
        item.classList.add("accordion-item--closed")
    })

    if(!isActive) {
        item.classList.add("accordion-item--active")
        item.classList.remove("accordion-item--closed")
    }
} 