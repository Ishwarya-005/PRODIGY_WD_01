function handleNavigation(event, targetId) {
    event.preventDefault(); 

 
    if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').substring(1); 
        handleNavigation(e, targetId);
    });
});
