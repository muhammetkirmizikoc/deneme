document.addEventListener('DOMContentLoaded', function () {
  var selamElement = document.getElementById('');
  var joyButton = document.getElementById('');

  joyButton.addEventListener('click', function () {
      // Eğer görünürlük durumu "none" ise "block" yap, aksi halde "none" yap.
      selamElement.style.display = (selamElement.style.display === 'block') ? 'none' : 'block';
  });
});

document.getElementById('bar').addEventListener('click', function () {
  var sal = document.getElementById('sal');
  sal.style.display = (sal.style.display === 'none' || sal.style.display === '') ? 'block' : 'none';
});




// ID'si "elma" olan öğeyi seç
var elmaElement = document.getElementById("elma");

// Öğeye tıklama olayını ekle
elmaElement.addEventListener("click", function () {
  // Mevcut sınıfı kaldır
  elmaElement.classList.remove("fa-bars-staggered");
  elmaElement.classList.remove("fa-circle-xmark");

  // Yeni sınıfı ekle
  elmaElement.classList.add("fa-circle-xmark");

  // Bir süre sonra eski sınıfa geri dön
  setTimeout(function () {
    elmaElement.classList.remove("fa-circle-xmark");
    elmaElement.classList.add("fa-bars-staggered");
  }, 1000); // 1000 milisaniye (1 saniye) sonra
});





const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


const backgroundImages = [
    'img/resim-1.jpeg',
    'img/resim-2.jpeg',
    'img/resim-3.jpeg',
    // ... diğer resimler
];

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];

    // Seçilen resmi selamDiv'in arka planına uygula
    document.getElementById('selx').style.backgroundImage = `url('${selectedImage}')`;
}

window.addEventListener('load', changeBackground);
