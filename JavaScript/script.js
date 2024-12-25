const body = document.querySelector('body');
const loader = document.getElementById('loader-container');
const modeChanger = document.getElementById('mode-changer');
const modeChangerImage = document.getElementById('mode-changer-image');
const linkStyleFile = document.getElementById('mode-link');
const dialogue = document.getElementById('dialogue');
const loginBtnContainer = document.getElementById('login-btn-container')
const closeLoginPage = document.getElementById('close-login-page');
const loginForm = document.getElementById('login-container');
const loginBtn = document.getElementById('login-btn');
const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const optionsContainer = document.getElementById('options-container');
const menuBar = document.getElementById('menu-bar');




setTimeout(() => {
    loader.style.display = 'none';
}, 3000);

let mode = 'lightMode';
modeChanger.addEventListener('click', function () {
    if (mode == 'lightMode') {
        linkStyleFile.href = './CSS/darkMode.css'
        modeChanger.style.border = '2px solid white';
        mode = 'darkMode';
        modeChangerImage.src = './SVG/darkMode.svg';
        console.log(mode);
    } else {
        linkStyleFile.href = './CSS/lightMode.css';
        modeChanger.style.border = '2px solid black';
        mode = 'lightMode';
        modeChangerImage.src = './SVG/lightMode.svg';
        console.log(mode);
    }
});

closeLoginPage.addEventListener('click', function () {
    dialogue.style.display = 'none';
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (userName.value === "" || passWord.value === "") {
        alert('First fill the form');
    } else {
        alert('Login Successfully');
        dialogue.style.display = 'none';
        loginBtnContainer.style.display = 'none';
        loginForm.reset();
    }
});

loginBtn.addEventListener('click', function () {
    dialogue.style.display = 'flex';
});

menuBar.addEventListener('click', () => {
    optionsContainer.classList.toggle('show')
})