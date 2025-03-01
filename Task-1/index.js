
document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault(); 


    document.body.style.overflow = 'auto';

    const aboutSection = document.getElementById('about');
    aboutSection.style.top = '0';


    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

