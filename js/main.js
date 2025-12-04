document.getElementById('year').textContent = new Date().getFullYear();

/* Radar Chart */
const radarCanvas = document.getElementById('skillsRadar');
if (radarCanvas) {
    radarCanvas.width = 500;  // bigger width
    radarCanvas.height = 500; // bigger height

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

    /* Rotate animation */
    let angle = 0;
    function rotate() {
        angle += 0.1;
        radarCanvas.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate);
    }
    rotate();
}
