const btn = document.querySelector('#bttSalvar')
const LOCAL_API_URL = 'http://localhost:3000/api'

btn.addEventListener('click', () => {
    const dados = getDadosForm()
    enviarDadosParaAPI(dados)
})

function getDadosForm() {
    const inputCidade = document.querySelector('#cidade')
    const inputBairro = document.querySelector('#bairro')
    const inputValorAluguel = document.querySelector('#valorAluguel')
    const inputQuantiIquilinos = document.querySelector('#quantInquilinos')
    const inputTelefone = document.querySelector('#telefone')

    const dates = {
        cidade: inputCidade.value,
        bairro: inputBairro.value,
        valorAluguel: inputValorAluguel.value,
        quantInquilinos: inputQuantiIquilinos.value,
        telefone: inputTelefone.value
    }
    return dates
}

async function enviarDadosParaAPI(dates) {
    try {
        const resposta = await fetch('https://sheetdb.io/api/v1/jc9mvvkn54345', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dates)
        })
        if (resposta.status === 201) {
            limparCampos()
        } else {
            console.log('Erro ao adicionar dados')
        }
    } catch (erro) {
        console.error(erro)
    }
}