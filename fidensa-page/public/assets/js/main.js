(function () {
  const track = document.getElementById('banner-track');
  const header = document.getElementById('site-header');
  const dotButtons = document.querySelectorAll('[data-banner-dot]');

  if (!track) return;

  let activeBanner = 0;
  const totalBanners = 2;
  const intervalMs = 10000;
  let intervalId = null;

  function updateDots() {
    dotButtons.forEach((button) => {
      const index = Number(button.dataset.bannerDot);
      const isActive = index === activeBanner;

      if (isActive) {
        button.setAttribute('aria-current', 'true');
      } else {
        button.removeAttribute('aria-current');
      }
    });
  }

  function setBanner(index) {
    activeBanner = ((index % totalBanners) + totalBanners) % totalBanners;
    track.style.transform = `translateX(-${activeBanner * 50}%)`;
    updateDots();
  }

  function startAutoSlide() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      setBanner(activeBanner + 1);
    }, intervalMs);
  }

  dotButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setBanner(Number(button.dataset.bannerDot));
      startAutoSlide();
    });
  });

  function onScroll() {
    if (!header) return;
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  setBanner(0);
  startAutoSlide();
})();
