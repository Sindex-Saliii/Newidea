document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 100 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        particlesContainer.appendChild(particle);
    }
    
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach(particle => {
            const speedX = (Math.random() - 0.5) * 10;
            const speedY = (Math.random() - 0.5) * 10;
            
            particle.style.transform = `translate(${speedX * mouseX}px, ${speedY * mouseY}px)`;
        });
    });
    
    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            let x = parseFloat(particle.style.left || 0);
            let y = parseFloat(particle.style.top || 0);
            
            x += (Math.random() - 0.5) * 0.5;
            y += (Math.random() - 0.5) * 0.5;
            
            if (x < 0) x = 100;
            if (x > 100) x = 0;
            if (y < 0) y = 100;
            if (y > 100) y = 0;
            
            particle.style.left = `${x}vw`;
            particle.style.top = `${y}vh`;
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
});