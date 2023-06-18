const { exec } = require('child_process');

module.exports = (mensagem = null) => {
    if(mensagem){
        console.log(mensagem);
    }
    return new Promise((resolve, rejects) => {
        exec('npm run build', (err, stdout, stderr) => {
            if (err) {
                rejects(err)
            }
            resolve(stdout)
        });
    });
}