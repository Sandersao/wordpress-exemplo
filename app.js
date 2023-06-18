const gerarBondle = require("./gerarBondle");

gerarBondle('Gerando bondle...')
    .then(() => {
        console.log('Geração de bondle concluída');
    })
    .catch(err => {
        console.log(err);
    })