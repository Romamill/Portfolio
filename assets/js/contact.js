/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'), 
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // ServiceID - templateID - #form - publicKey
    emailjs.sendForm('service_997yzp5', 'template_pqbw00k', '#contact-form', '0srfThttpCG8H1Eqv')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}  

contactForm.addEventListener('submit', sendEmail)