var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
        function toggleMenu() {
            const navItems = document.querySelector('.nav-items');
            navItems.classList.toggle('show');
        }

        document.querySelectorAll('.nav-items a').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.nav-items').classList.remove('show');
            });
        });

