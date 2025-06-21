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


