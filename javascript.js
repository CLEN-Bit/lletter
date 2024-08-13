// script.js

document.getElementById('openLetter').addEventListener('click', function() {
    const letter = document.getElementById('letter');
    const balloons = document.getElementById('balloons');
    const hearts = document.getElementById('hearts');

    letter.style.display = 'block';

    // Generate balloons
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.width = `${Math.random() * 50 + 20}px`;
        balloon.style.height = balloon.style.width;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloons.appendChild(balloon);
    }

    // Generate hearts
    for (let i = 0; i < 15; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        hearts.appendChild(heart);
    }

    this.style.display = 'none';
});
