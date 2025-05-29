// Classe responsável por controlar o menu mobile (hamburguer)
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    // Seleciona o botão do menu, a lista de navegação e os links
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    // Garante que o 'this' funcione corretamente no evento de clique
    this.handleClick = this.handleClick.bind(this);
  }

  // Animação dos links do menu ao abrir/fechar
  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  // Função chamada ao clicar no menu hamburguer
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    document.body.classList.toggle('menu-open'); // Adicione esta linha aqui
    this.animateLinks();
  }

  // Adiciona o evento de clique ao menu hamburguer
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  // Inicializa o menu mobile
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

// Instancia a classe passando os seletores do menu
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

function setDarkMode(enabled) {
    if (enabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', enabled ? 'on' : 'off');
}

document.addEventListener('DOMContentLoaded', function() {
    // Aplica o modo salvo
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
    }
    if (localStorage.getItem('purpleMode') === 'on') {
        document.body.classList.add('purple-mode');
    }

    // Botão dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.remove('purple-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'on' : 'off');
            localStorage.setItem('purpleMode', 'off');
        });
    }

    // Botão purple mode
    const purpleModeToggle = document.getElementById('purpleModeToggle');
    if (purpleModeToggle) {
        purpleModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('purple-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('purpleMode', document.body.classList.contains('purple-mode') ? 'on' : 'off');
            localStorage.setItem('darkMode', 'off');
        });
    }
});