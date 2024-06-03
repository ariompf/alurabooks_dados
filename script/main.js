// Função Consulta de CEP assíncrona
async function buscaEndereco(cep) {
    mensagemErro.innerHTML = '';
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente"')            
        }
        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf
        bairro.value = consultaCEPConvertida.bairro
        console.table(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        console.log(erro)
        mensagemErro.innerHTML = '<p>CEP inválido, tente novamente. Verifique se o CEP possui 8 dígitos. Ex.: 01001000.</p>'
    }
};

//HTML
const cep = document.getElementById('cep');
const cidade = document.getElementById('cidade');
const logradouro = document.getElementById('endereco');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');

var mensagemErro = document.getElementById('erro')


//Evento
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
