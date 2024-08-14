/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll(`.services__modal`),
    modalButton = document.querySelectorAll(`.services__button`),
    modalClose = document.querySelectorAll(`.services__modal-close`)

let activeModal = (modalClick) => {
    modal[modalClick].classList.add(`active-modal`)
}   

modalButton.forEach((modalButton, i) => {
    modalButton.addEventListener(`click`, () => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose) => {
    modalClose.addEventListener(`click`, () => {
        closeModal()
    })
})


let closeModal = () => {
    modal.forEach((modalRemove) => {
        modalRemove.classList.remove(`active-modal`)
    })
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal()
    }
})


modal.forEach((modalItem) => {
    modalItem.addEventListener('click', (event) => {
        if (event.target === modalItem) {
            closeModal()
        }
    })
})

/*=============== SWIPER TESTIMONIAL ===============*/

const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        dinamicBullets: true,
        clicable: true,
      
  },

})

/*=============== SHOW SCROLL UP ===============*/ 
