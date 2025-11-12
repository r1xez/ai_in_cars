document.addEventListener('DOMContentLoaded', () => {
  
 
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
  } else {
   
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top <= windowHeight * 0.95 && rect.bottom >= 0;
        if (inView) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll, { passive: true });
    window.addEventListener('resize', revealOnScroll);
  }

 
  const menuTogglePro = document.querySelector('.menu-toggle-pro');
  
 
  const headerRightGroup = document.querySelector('.header-right-group');

  if (menuTogglePro && headerRightGroup) {
    menuTogglePro.addEventListener('click', () => {
      
      
      headerRightGroup.classList.toggle('active'); 
      
      const isExpanded = headerRightGroup.classList.contains('active');
      menuTogglePro.setAttribute('aria-expanded', isExpanded);
      
      if (isExpanded) {
        menuTogglePro.innerHTML = '&#10005;'; // 'X'
      } else {
        menuTogglePro.innerHTML = '&#9776;'; // '☰'
      }
    });
  }
  
});