/************* NAVIGATION BAR **************/
window.addEventListener("scroll", function () {

  var header = document.querySelector("nav");
  header.classList.toggle("menu-scroll", window.scrollY > 0)
})

// CARROSSEL PRODUTOS EM DESTAQUES

$('.carrone').slick({
  prevArrow: '.slick-prev-one',
  nextArrow: '.slick-next-one',
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.carrtwo').slick({
  prevArrow: '.slick-prev-two',
  nextArrow: '.slick-next-two',
  autoplay: true,
  autoplaySpeed: 4000,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


/* OPEN PAGE LOGIN REGISTER */

$('button').on('click', function () {
  $('#divId').show(); // aparece o div
  // window.open(seulink, '_blank'); // abre nova janela, esta dando erro

});

/*SISTEMA LIGHT AND DARK */
const chageThemeBtn = document.querySelector("#chenge-theme");


//Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark")
}

// Load light or dark mode . preferencia do usuario
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme()

chageThemeBtn.addEventListener("change", function () {
  toggleDarkMode()
  //Save or remove dark mode
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }

});

// ABRIR MODAL CONFIGURATIONS

function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
}

feather.replace();

//ABRINDO O MENU DO CARRINHO
function scrollCart() {

  // Abrir o menu do carrinho
  let cartItem = document.querySelector('.cardCarrinho-container');
  document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');

  }
  // Se rola a pagina feche o carrinho
  window.onscroll = () => {
    cartItem.classList.remove('active');
  }
}
scrollCart()

//

function loginOuCadrasto() {
  window.addEventListener('load', () => {
    let email = localStorage.getItem('userLogado')

    document.getElementById('user-email').innerHTML = email === null
      ? '<a href="login-page.html"><i class="fa-solid fa-user"></i></a>'
      : `<img src="assets/img/login-back/msn2.png" id="iconMSN">
      `


    // document.querySelector('#ul-OpenConfig').innerHTML += email === "" //Aqui ta dando conflito com a config dark
    //   ? ''
    //   :
    //   `
    //   <li onclick='sair()'>
    //           <p> sair </p>
    //         </li>

    //       `

  })


}
loginOuCadrasto()
const sair = () => {
  localStorage.removeItem('userLogado')
  window.location.href = ''
}

