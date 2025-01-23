"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/styles/dashboard.css");
require("./assets/images/sofkalogo.png");
const user = localStorage.getItem('user');
const dashboardContainer = document.getElementById('dashboard');
if (user) {
    const logoutButton = document.getElementById('logout-button');
    const userData = JSON.parse(user);
    const userName = userData.firstName;
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        });
    }
    if (dashboardContainer) {
        const welcomeMessage = document.createElement('h2');
        welcomeMessage.textContent = `Bienvenido, ${userName}!`;
        dashboardContainer.prepend(welcomeMessage);
    }
    window.addEventListener('beforeunload', () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    });
}
else {
    alert('No tienes acceso, por favor inicia sesión');
    window.location.href = 'login.html';
}
