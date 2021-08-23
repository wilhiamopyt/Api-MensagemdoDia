let dados = require('./Dados');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;