// Romantik sözler ve öneriler listesi
const surpriseMessages = [
    "Sen benim en güzel rastlantımsın. ❤️",
    "Birlikte her an bir mucize gibi.",
    "Gözlerin bir ömre bedel…",
    "Bu günün bir gülümseme kadar güzel geçsin!",
    "Unutma, seninle geçen her günüm bir bayram. 🎉",
    "Haydi, bir kahve yap ve bu anın tadını çıkar. ☕",
    "Seni mutlu görmek benim için en büyük mutluluk.",
    "Hadi, birlikte bir yürüyüşe çıkalım. 🌸",
    "Bugün birbirimize daha çok sarılalım. 🤗",
    "Seninle her an bir masal gibi... ✨"
];

// Rastgele bir mesaj seçip ekrana yazdırma
function generateSurprise() {
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    const randomMessage = surpriseMessages[randomIndex];
    document.getElementById("surprise-message").textContent = randomMessage;
}
// Gizli mesaj şifresi
const correctPassword = "seviyorum";

function unlockMessage() {
    const inputPassword = document.getElementById("password").value;
    const secretMessage = document.getElementById("secret-message");
    const errorMessage = document.getElementById("error-message");

    // Şifre doğruysa
    if (inputPassword === correctPassword) {
        secretMessage.style.display = "block"; // Mesajı göster
        errorMessage.style.display = "none";  // Hata mesajını gizle
    } else {
        errorMessage.style.display = "block"; // Hata mesajını göster
        secretMessage.style.display = "none"; // Mesajı gizle
    }
}
// Fotoğrafların bulunduğu çark
const carousel = document.querySelector('.carousel');

// Sağ ve sol butonlar
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Fotoğrafların toplam sayısı
const totalItems = document.querySelectorAll('.carousel-item').length;

// Başlangıçtaki fotoğraf indexi
let currentIndex = 0;

// Bir sonraki fotoğrafa gitme fonksiyonu
function goToNext() {
    // Eğer son fotoğrafa geldiysek, başa dön
    if (currentIndex === totalItems - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
}

// Bir önceki fotoğrafa gitme fonksiyonu
function goToPrev() {
    // Eğer ilk fotoğraftaysak, son fotoğrafa dön
    if (currentIndex === 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex--;
    }
    updateCarousel();
}

// Çarkı güncelleyen fonksiyon
function updateCarousel() {
    const offset = -currentIndex * 100; // Her fotoğrafın genişliği %100
    carousel.style.transform = `translateX(${offset}%)`; // Fotoğraf kaydırma
}

// Butonlara tıklama eventleri
nextButton.addEventListener('click', goToNext);
prevButton.addEventListener('click', goToPrev);

// Otomatik kaydırma fonksiyonu
setInterval(goToNext, 3000); // 3 saniye arayla otomatik geçiş
