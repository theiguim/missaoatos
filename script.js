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
})

