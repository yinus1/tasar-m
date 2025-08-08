// Özel günü belirleyin
const eventDate = new Date("2025-07-23T15:30:00").getTime(); // Örneğin, Sevgililer Günü

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.getElementById("countdown-timer").textContent = "Bugün Özel Gün! 🎉";
    }
}

// Geri sayımı her saniye güncelleyin
setInterval(updateCountdown, 1000);
