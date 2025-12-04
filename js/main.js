// ---------------- UPDATE FOOTER YEAR ----------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- CONTACT FORM (EmailJS v4) ----------------
emailjs.init("rw9TwjCxJZIsPWS34"); // your public key

const contactForm = document.getElementById('contactForm');
const formPopup = document.getElementById('formPopup');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_vxrxjiq', 'template_75cfmpa', this)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                // Show popup
                formPopup.style.display = 'block';
                formPopup.style.opacity = 1;

                // Confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                // Hide popup after 4s
                setTimeout(() => {
                    formPopup.style.transition = "opacity 0.5s";
                    formPopup.style.opacity = 0;
                    setTimeout(() => {
                        formPopup.style.display = 'none';
                    }, 500);
                }, 4000);

                contactForm.reset();
            }, (error) => {
                console.error('FAILED...', error);
                alert("Oops! Something went wrong. Please try again.");
            });
    });
}
