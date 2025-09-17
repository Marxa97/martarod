document.addEventListener('DOMContentLoaded', function() {
    // Iniciar la animación de confeti
    const confettiCanvas = document.getElementById('confeti');
    const confettiEffect = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    const botonMusica = document.getElementById('botonMusica');
    const pantallaInicio = document.getElementById('inicio');
    const musica = document.getElementById('musicaFondo');
    botonMusica.addEventListener('click', function() {
        // Inicia la música
        musica.play();
        
        // Oculta la pantalla de inicio
        pantallaInicio.classList.add('oculto');
        
        // Lanza el primer confeti
        launchConfetti();
    });
     const confettiCanvas = document.getElementById('confetti');
    const confettiEffect = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });

    function launchConfetti() {
        confettiEffect({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }

    // Lanzar confeti periódicamente (inicia después del clic)
    setInterval(launchConfetti, 3000);
});