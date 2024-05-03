document.addEventListener("DOMContentLoaded", function() {
    // Menambahkan event klik pada tombol play agar memunculkan popup videdo
    const tombolPlay = document.querySelector(".play");
    const videoPopup = document.querySelector(".judul .playd .play .popup");

    tombolPlay.addEventListener("click", function() {
        alert("Memutar showreal!");
        videoPopup.style.display = "block";
    });

    // Fungsi scroll ke atas
    const tombolAtas = document.querySelector(".dasboard p");
    tombolAtas.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Menambahkan popup  pada "About Me"
    const tombolTentang = document.querySelector("label[for='#bgtbl']");
    tombolTentang.addEventListener("click", function() {
        alert("Informasi Tentang saya");
        // Anda dapat menambahkan lebih banyak fungsionalitas di sini, seperti menampilkan modal atau memperluas bagian
    });

    // Menambahkan event klik pada tombol "Explore To Code"
    const tombolJelajah = document.querySelector(".tombolreal a");
    tombolJelajah.addEventListener("click", function() {
        alert("Jelajahi ke Kode diklik!");
        // Anda dapat menambahkan lebih banyak fungsionalitas di sini, seperti mengarahkan ke halaman lain atau menampilkan informasi lebih lanjut
    });

    // Mendapatkan elemen pertama dari .main .nav ul li
    const firstNavItem = document.querySelector(".main .nav ul li:first-child");

    // Menambahkan event listener untuk menghentikan scroll ke atas ketika mahkota di scroll
    firstNavItem.addEventListener("click", function(event) {
        // Menghentikan peristiwa default
        event.preventDefault();
    });
});