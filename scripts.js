const nameElement = document.getElementById('typed-name');
const nameText = "Gudla Nishika"; 
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        nameElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
const roles = ["AI/ML Enthusiast", "Trader", "Full-Stack Developer", "Problem Solver", "Innovator"];
let roleIndex = 0;

function changeText() {
    const dynamicText = document.querySelector('.dynamic-text');
    dynamicText.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

changeText(); 
setInterval(changeText, 3000); 
