const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');

// 1. The "No" Button Logic (Run Away)

function moveButton() {
    // 1. Get current state
    const currentRect = noBtn.getBoundingClientRect();
    const currentX = currentRect.left;
    const currentY = currentRect.top;
    
    // 2. Configuration
    const padding = 20;
    const minMove = 180; // Must move at least 100px
    const maxMove = 400; // Must not move more than 400px
    
    let randomX, randomY, dist;
    let attempts = 0;

    // 3. Rejection Sampling Loop
    // Try finding a spot that fits our min/max criteria
    do {
        // Generate random coordinates within screen bounds
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        randomX = Math.max(padding, Math.random() * maxX);
        randomY = Math.max(padding, Math.random() * maxY);

        // Calculate straight-line distance (Pythagorean theorem)
        const dx = randomX - currentX;
        const dy = randomY - currentY;
        dist = Math.sqrt(dx * dx + dy * dy);

        attempts++;
        // Stop if we found a good spot OR if we tried 20 times (prevents freezing)
    } while ((dist < minMove || dist > maxMove) && attempts < 20);

    // 4. Apply the position
    // We only need to switch to fixed once
    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
        noBtn.style.left = currentX + 'px';
        noBtn.style.top = currentY + 'px';
    }

    // Move to new coordinates
    // Using a tiny timeout ensures the browser registers the context switch first
    setTimeout(() => {
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }, 10);
}

// Add event listeners for the "run away" effect
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent actual click on mobile
    moveButton();
});

// 2. The "Yes" Button Logic
yesBtn.addEventListener('click', () => {
    // A. Launch Confetti
    triggerConfetti();

    // B. Switch Screens
    questionScreen.style.display = 'none';
    successScreen.classList.remove('hidden');
});

// Confetti Configuration
function triggerConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const random = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Random bursts from different parts of the screen
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}