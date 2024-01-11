document.addEventListener('DOMContentLoaded', () => {

    const responsive = document.getElementById('responsive')
    const ul = document.getElementById('ul')

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 600) {
            ul.style.display = 'flex'
        } else {
            ul.style.display = 'none'
        }
    })

    responsive.addEventListener('click', () => {

        if (ul.style.display == 'block') {
            ul.style.display = 'none'
        } else {
            ul.style.display = 'block'
        }
    })

    if (responsive.style.display == 'block') {
        ul.addEventListener('click', (e) => {
            if (e.target) {
                ul.style.display = 'none'
            }
        })
    }


    const imgSections = document.querySelectorAll('.img_section');

    window.addEventListener('scroll', () => {
        imgSections.forEach((imgSection) => {
            const rect = imgSection.getBoundingClientRect();
            const translateY = window.scrollY - rect.top;
            imgSection.style.transform = `translateY(${translateY * 0.1}px)`;
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    const jornal = document.getElementById('jornal')
    window.addEventListener('scroll', () => {
        const scrollAmount = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollAmount >= viewportHeight) {
        jornal.classList.add('invisivel');
      } else {
        jornal.classList.remove('invisivel');
      }
    })

const capa_nav = document.getElementById('capa_nav')
let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const opacity = 1 - (scrollTop / viewportHeight);
      capa_nav.style.opacity = opacity.toFixed(2);
    
    });


})


