$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 }
  }
});

  const myCarousel = new bootstrap.Carousel('#carouselExampleRide', {
    interval: 3000,
    ride: 'carousel'
  });

  const links = document.querySelectorAll('.nav-link');
  // خزّن الألوان الأصلية لكل زر
  links.forEach(link => {
    link.setAttribute('data-color', link.style.color);
  });
  function setActiveLink(clickedLink) {
    links.forEach(link => {
      link.classList.remove('active');
      link.style.color = link.getAttribute('data-color');
    });

    clickedLink.classList.add('active');
    clickedLink.style.color = '#DA9F5B'; // ← اللون اللي انت عايزه
  }
  // أول ما الصفحة تفتح، فعل لينك الـ Home
  window.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    setActiveLink(homeLink);
  });
  // لما المستخدم يضغط على أي زر
  links.forEach(link => {
    link.addEventListener('click', function () {
      setActiveLink(this);
    });
  });
  
  // اعمل انيميشن لما اسكرول ياض

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationClass = element.dataset.animate;

        element.classList.add('visible'); // يخليها تطلع بسلاسة
        element.classList.add('animate__animated', animationClass);

        observer.unobserve(element); // يشغل مرة واحدة بس
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });