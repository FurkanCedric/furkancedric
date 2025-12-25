document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Alanlar boş mu kontrol et [cite: 144]
    if (name === "" || email === "" || message === "") {
        alert("Lütfen tüm alanları doldurun!");
    } else {
        alert("Mesajınız başarıyla gönderildi, " + name + "!");
        this.reset(); // Formu temizler
    }
});