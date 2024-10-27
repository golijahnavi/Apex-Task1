function showMenu() {
    const menuSection = document.getElementById('menu');
    const contactSection = document.getElementById('contact');
    
    menuSection.style.display = 'block';
    contactSection.style.display = 'none';
}

function showContact() {
    const menuSection = document.getElementById('menu');
    const contactSection = document.getElementById('contact');
    
    menuSection.style.display = 'none';
    contactSection.style.display = 'block';
}
