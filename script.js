liToggle.addEventListener('click', _ => {
    const menuEstaAtivo = uiNavBar.classList.contains('active');
    if (menuEstaAtivo) {
        uiNavBar.classList.remove('active');
        aToggle.innerText = '=';
    } else {
        uiNavBar.classList.add('active');
        aToggle.innerText = 'x';
    }
});