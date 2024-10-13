const progressBar = document.getElementById('progress-bar');
const percentageText = document.getElementById('percentage-text');
const car = document.getElementById('car');

let progress = 0;

function loadAssets() {
    if (progress < 100) {
        progress += 1; // Increase by 1% every 50ms
        progressBar.style.width = progress + '%'; // Grow the inner green bar
        percentageText.textContent = progress + '%'; // Update percentage text
        
        setTimeout(loadAssets, 50); // Continue until 100% is reached
    } else {
        progressBar.style.width = '100%';
        percentageText.textContent = '100%';
        document.querySelector('.loading-text').textContent = 'Alle Assets geladen!';
        
        // Stop the car animation
        car.style.animationPlayState = 'paused';
        
        // Auto verschwinden lassen
        setTimeout(() => {
            car.style.display = 'none'; // Auto nach 1 Sekunde verschwinden lassen
            document.querySelector('.loading-text').textContent = 'Fertig!';
        }, 1000);
    }
}

window.onload = loadAssets;

