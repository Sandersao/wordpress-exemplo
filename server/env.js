const readFile = (file) => {
    return require('fs').readFileSync(file).toString()
}

const parseEnvLine = (envLine) => {
    const index = envLine.split('=')[0].trim().toLowerCase()
    const value = envLine.split('=')[1].trim()
    return [index, value]
}

const parseEnv = (envText) => {
    const envLineList = envText.split('\n')
    const env = {
        environment: 'production'
    }
    for (const i in envLineList) {
        const [index, value] =
            parseEnvLine(envLineList[i])
        env[index] = value
    }
    return env
}

const envContent = readFile('./.env')

module.exports = parseEnv(envContent)