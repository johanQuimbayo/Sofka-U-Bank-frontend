"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;
function showLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}
function hideLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
}
