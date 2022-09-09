class Conta {
    verify() {
        const [email, senha] = getData()
        const id = localStorage.getItem('id')

        for (let i = 1; i < id; i++) {
            const { e: emailSis, s: senhaSis } = JSON.parse(localStorage.getItem(`conta${i}`))
            // console.log ( email , emailSis)

            if (email === emailSis && senha === senhaSis) {
                this.approved(email)
                break
            }

            if (i === id - 1) {
                this.disapproved()
            }
        }
    }

    approved(email) {
        alert('login aprovado, você sera redirecionado(a) a tela inicial')
        localStorage.setItem('userLogado', email)
        window.location.href = 'index.html'
    }

    disapproved() {
        limparInput()
        alert('senha e/ou usuarios incorreto(s)')
    }
}

document.querySelector('#login-btn').addEventListener('click', () => {
    const conta = new Conta()
    conta.verify()
})

//funcoes

const getData = () => [document.querySelector('#email').value,
document.querySelector('#senha').value
]

const limparInput = () => {
    document.querySelector('#senha').value = ''
}