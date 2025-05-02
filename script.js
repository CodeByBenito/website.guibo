let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')   
    navbar.classList.toggle('active');
}

const roles = ["Desenvolvedor Web", "Instrutor de Idiomas", "Mentor"];
const typewriterText = document.querySelector(".typewriter-text");

let roleIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typingSpeed = 40;      // Velocidade de digitação rápida (menor é mais rápido)
const deletingSpeed = 60;    // Velocidade de apagar ainda mais rápida
const waitAfterTyping = 800; // Espera depois de terminar de digitar
const waitAfterDeleting = 300; // Espera depois de apagar

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    // Deleting                                 
    typewriterText.textContent = currentRole.substring(0, letterIndex--);
    
    if (letterIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, waitAfterDeleting);
      return;
    }
  } else {
    // Writing
    typewriterText.textContent = currentRole.substring(0, letterIndex++);
    
    if (letterIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, waitAfterTyping);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);