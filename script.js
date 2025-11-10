// Плавна поява елементів при скролі
// Елементи повинні мати клас `reveal` у розмітці.
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  // Використовуємо IntersectionObserver, якщо доступний
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // показати лише один раз
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Фолбек для старих браузерів: перевірка при скролі
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(el => {
        if (el.classList.contains('active')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.95) {
          el.classList.add('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('resize', revealOnScroll);
  }
});
