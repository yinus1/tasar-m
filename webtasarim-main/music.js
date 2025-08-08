// Müzik çaların başlatılmasını kontrol etmek
window.onload = function() {
    // Eğer müzik başlamamışsa, müziği başlat
    if (!localStorage.getItem('musicStarted')) {
        localStorage.setItem('musicStarted', 'true');
        let audio = new Audio('music/Ama_Yine_Sen.mp3');
        audio.loop = true;
        audio.play();
    }
};
