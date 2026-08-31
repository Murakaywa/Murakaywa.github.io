// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var social = document.querySelector('.nav-social');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      social.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });
  }

  // Lightbox for gallery items with a real image
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxCap = lightbox.querySelector('.lightbox-cap');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.gallery-item[data-full]').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImg.src = item.getAttribute('data-full');
        lightboxImg.alt = item.getAttribute('data-alt') || '';
        lightboxCap.textContent = item.getAttribute('data-caption') || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

});
