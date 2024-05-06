var typed = new Typed('.type', {
    strings: ['Hungry?', 'Unexpected guests?', 'Movie Marathon?', 'Cooking Gone Wrong?'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

function toggleSection(sectionToShow) {
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionToShow + 'Section').style.display = 'block';
}
/*
function toggleSection(sectionToShow) {
    var mainSection = document.getElementById('mainSection');
    var menuSection = document.getElementById('menuSection');
    var orderSection = document.getElementById('orderSection');
    var customerSection = document.getElementById('customerSection');
    var reservationSection = document.getElementById('reservationSection');
    var employeeSection = document.getElementById('employeeSection');

    mainSection.style.display = 'none';
    menuSection.style.display = 'none';
    orderSection.style.display = 'none';
    customerSection.style.display = 'none';
    reservationSection.style.display = 'none';
    employeeSection.style.display = 'none';

    switch (sectionToShow) {
        case 'main':
            mainSection.style.display = 'block';
            break;
        case 'menu':
            menuSection.style.display = 'block';
            break;
        case 'order':
            orderSection.style.display = 'block';
            break;
        case 'customer':
            customerSection.style.display = 'block';
            break;
        case 'reservation':
            reservationSection.style.display = 'block';
            break;
        case 'employee':
            employeeSection.style.display = 'block';
            break;
        default:
            break;
    }
}
*/