// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- RADAR CHART ---------------- */
const radarCanvas = document.getElementById('skillsRadar');
if (radarCanvas) {
    radarCanvas.width = 500;
    radarCanvas.height = 500;

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
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    angleLines: { color: '#ddd' },
                    grid: { color: '#ccc' },
                    pointLabels: { color: '#21412c' },
                    ticks: { display: false }
                }
            }
        }
    });

    // Rotate animation
    let angle = 0;
    function rotate() {
        angle += 0.1;
        radarCanvas.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate);
    }
    rotate();
}

/* ---------------- CONTACT FORM (EmailJS) ---------------- */
// Initialize EmailJS with your Public Key
emailjs.init("rw9TwjCxJZIsPWS34");

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_vxrxjiq', 'template_75cfmpa', this)
      .then(() => {
        formMessage.style.display = 'block';
        contactForm.reset();
        setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  });
}

