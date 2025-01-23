import './assets/styles/dashboard.css'
import './assets/images/sofkalogo.png';
import {UserResponse} from "./models/user/response/UserResponse";


const user:string | null = localStorage.getItem('user');

const dashboardContainer:HTMLElement | null = document.getElementById('dashboard');

if (user) {

    const logoutButton = document.getElementById('logout-button');

    const userData:UserResponse = JSON.parse(user);
    const userName:string = userData.firstName;



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

} else {
    alert('No tienes acceso, por favor inicia sesión');
    window.location.href = 'login.html';
}