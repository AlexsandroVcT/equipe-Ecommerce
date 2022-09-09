
//objeto literal dos produtos que o site possui
const products = {
  0: {
    nome: 'Apple Iphone 11',
    desc: 'Muito Utilizado em tecnologias avançadas..',
    valor: 3320.0,
    img: '<img src="assets/img/moda/Bucket1.png">',
    qtd: 1
  },

  1: {
    nome: "Controle Xbox",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 290.0,
    img: '<img src="assets/img/projects/console.png">',
    qtd: 1
  },

  2: {
    nome: "Headset Gamer",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 349.99,
    img: '<img src="assets/img/projects/headphone1.png">',
    qtd: 1
  },

  3: {
    nome: "Air Jordan",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 329.99,
    img: '<img src="assets/img/projects/nike-jordan.png">',
    qtd: 1
  },

  4: {
    nome: "Xiaomi Mi Band",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 169.99,
    img: '<img src="assets/img/projects/relógio.png">',
    qtd: 1
  },

  5: {
    nome: "Nutriwhey",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 48.49,
    img: '<img src="assets/img/projects/whey.png">',
    qtd: 1
  },

  6: {
    nome: "Slant Summer",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 131.19,
    img: '<img src="assets/img/projects/tenis-masc.png">',
    qtd: 1
  },

  7: {
    nome: "Philco Smart TV",
    desc: "Muito Utilizado em tecnologias avançadas..",
    valor: 1399.00,
    img: '<img src="assets/img/projects/Philco-Tv.png">',
    qtd: 1
  }

}

//gera o objeto do id clicado no site
class Product {
  constructor(id) {
    // desconstroi o objeto selecionado com o id, e gera variaveis individuais
    const { nome,
      desc,
      valor,
      img,
      qtd
    } = products[id]
    //

    //pega os valores individuais do objeto selecionado com base no id e coloca no objeto que vai ser gerado 
    //posteriormente na funcao que é acionada ao clicar nos botes de compra

    this.nome = nome
    this.desc = desc
    this.valor = valor
    this.img = img
    this.qtd = qtd
  }
}





///////////////////////////////////////////////////////CLIQUE///////////////////////////////////////////////////////////

//ao clicar em um dos botoes de compra, gera uma funcao
document.querySelector('body').addEventListener('click', ({
  target: {
    dataset: {
      produtoid: id
    }
  }
}) => {
  if ((id >= 0) &&
    (id <= 7) &&
    (id != '')) {

    if (localStorage.getItem('userLogado')) {
      let idUserLogado = getIdUser()


      const produto = new Product(id)

      let cart = {} //cria o carrinho
      // console.log(idUserLogado)
      // console.log(JSON.parse(localStorage.getItem(`conta${idUserLogado}`)))
      if (Object.entries(JSON.parse(localStorage.getItem(`conta${idUserLogado}`))['cart']).length === 0) {
        console.log('passou primeira vez')
        cart[id] = produto // se o carrinho for nulo, ele gera um carrinho novo

      } else {
        cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart // caso nao for, ele pega o carrinho ja gerado, 
        // e so atribui o produto clicado

        let possui = false //ja possui o produto no carrinho começa como falso

        Object.keys(cart).forEach(el => {
          if (el === id) {
            possui = true // se o produto tiver no carrinho, possui vira true
          }
        })

        if (!possui) { // se o produto ja tiver no carrinho, ele n vai adicionar
          cart[id] = produto
        } else {
          alert('produto ja existente')
        }

      }

      reajustarObjeto(cart) // salva o produto cart no localstorage 'cart'

      setarValores(idUserLogado) // seta os valores
    } else {
      window.location.href = 'login-page.html'
    }

  }
})








////////////////////////////////////////////////////////FUNCOES//////////////////////////////////////////////////////////

// formata o valor para R$
const formatarValorRS = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format((valor).toFixed(2))
}

// seta o texto do carrinho, com base no parametro passado na funcao
const setText = texto => {
  document.querySelector('.cart-item').innerHTML = texto
}

// pega o texto, com base no objeto, e passa para um variavel para depois usa-la no setText()
const getText = (id, {
  nome,
  desc,
  valor,
  img,
  qtd
}) => {
  let texto = ` 

  <div id="item-estilizing" class="div${id}" >
  
    <header>
      
      <figure>
        ${img}
      </figure>
      <figcaption>
        <h6>${nome} </h6>
        <p>${desc}</p>
      </figcaption>
    </header>
    <li>
      
        <button class="btn plus" onclick="adicionarQtd(${id}, ${qtd})"> + </button>
        <p> ${qtd} </p>
        <button class="btn minus" onclick="removerQtd(${id}, ${qtd})"> - </button>
      
    </li>
    <section>
      <p> ${formatarValorRS((valor * qtd * 0.9))} <br /> <span style='color: red;'>10% OFF</span></p>
    </section>
  </div>`

  return texto
}

// seta o total no carrinho
const setTotal = (total) => document.querySelector('.total').innerHTML =
  `
  <h2>Subtotal: <b>${formatarValorRS((total * 0.9))}</b> </h2>
`

// pega o valor e a quantidade, com base no objeto passado e multiplica eles entri si
const getTotal = ({ valor, qtd }) => valor * qtd

//ele seta no documento, o numero de produtos no carrinho
const setNumeroProdutos = numero => document.querySelector('#cont-itens-carrinho').innerHTML = numero

//ele retorna o valor de produtos no carrinho com base no objeto passado como parametro
const getNumeroProdutos = obj => Object.keys(obj).length

// ele seta os valores no documento, usando todas as outras funcoes acima
const setarValores = (id) => {
  const cart = JSON.parse(localStorage.getItem(`conta${id}`)).cart

  let texto = ''

  Object.entries(cart).forEach(el => texto += getText(el[0], el[1]))

  let total = 0

  Object.entries(cart).forEach(el => total += getTotal(el[1]))



  let numero_de_produtos = getNumeroProdutos(cart)

  setTotal(total)
  setText(texto)
  setNumeroProdutos(numero_de_produtos)
}


// na funcao getText() ele coloca um onclick nos botoes de remover e adicionar qtd do produto, e aqui, 
// ele opera essas funcoes de remover() e adicionar()

//remover qtd do produto selecionado
const removerQtd = (id, qtd) => {
  let idUserLogado = getIdUser()
  let cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart

  if (qtd === 1) {  //se a qtd do produto selecionad com base no id for 1, ele removera do objeto carrinho, 
    delete cart[id]  //o produto em questao, e tambem removera do html
    document.querySelector(`.div${id}`).remove()
    reajustarObjeto(cart)

  } else {
    qtd--

    cart[id].qtd = qtd

    reajustarObjeto(cart)
  }
  setarValores(idUserLogado) // seta os valores atualizados
}

//adicionar qtd do produto selecionado
const adicionarQtd = (id, qtd) => {
  let idUserLogado = getIdUser()
  let cart = JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart

  if (qtd <= 19) { // ele trava e deixa adicionar qtd se o numero for 20, ate 19 ele deixa add mais 1, por isso 20
    qtd++

    cart[id].qtd = qtd

    reajustarObjeto(cart)
  }

  setarValores(idUserLogado) // seta os valores atualizados
}


// carregamento da pagina //

//ao carregar na janela, ele seta os valores 
document.body.onload = () => {
  let idUserLogado = getIdUser()
  if (localStorage.getItem(`conta${idUserLogado}`) && Object.entries(JSON.parse(localStorage.getItem(`conta${idUserLogado}`)).cart).length != 0) { // ele apenas seta os valores, se o obj cart no localstorage n for nulo
    // assim, evitando algum erro
    setarValores(idUserLogado)
  }
}

const getIdUser = () => {
  for (let i = 1; i < localStorage.getItem('id'); i++) {
    if (JSON.parse(localStorage.getItem(`conta${i}`)).e === localStorage.getItem('userLogado')) {
      return i
    }
  }
}

const reajustarObjeto = (cart) => {
  let idUserLogado = getIdUser()
  const { e, s } = JSON.parse(localStorage.getItem(`conta${idUserLogado}`))

  localStorage.setItem(`conta${idUserLogado}`, JSON.stringify({ e, s, cart }))
}
