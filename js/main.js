// ---------------- UPDATE FOOTER YEAR ----------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- RADAR CHART ----------------
const radarCanvas = document.getElementById('skillsRadar');
if (radarCanvas) {
    const ctx = radarCanvas.getContext('2d');

    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['.NET', 'C#', 'TypeScript', 'PyTest', 'Agile', 'CI/CD', 'Java'],
            datasets: [{
                label: 'Skill Level',
                data: [80, 75, 70, 65, 85, 80, 60],
                backgroundColor: 'rgba(246,178,26,0.25)',
                borderColor: '#21412c',
                pointBackgroundColor: '#21412c',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    angleLines: { color: '#ddd' },
                    grid: { color: '#ccc' },
                    pointLabels: { color: '#21412c', font: { size: 14 } },
                    ticks: { display: false }
                }
            }
        }
    });

    // ---- Add rotation ----
    let angle = 0;
    function rotateRadar() {
        angle += 0.05; // control speed
        radarCanvas.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotateRadar);
    }
    rotateRadar();
}

// ---------------- CONTACT FORM (EmailJS v4) ----------------
emailjs.init("rw9TwjCxJZIsPWS34");

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
