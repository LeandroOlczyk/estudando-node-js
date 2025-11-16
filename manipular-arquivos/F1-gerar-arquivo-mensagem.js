const fs = require('fs');
const path = require('path');

const nomeArquivo='mensagem.txt'
const texto = 'Texto adicionado via Node.js';

const diretorio = path.join(__dirname, 'arquivos_gerados');

console.log('__dirname:',__dirname)
console.log('diretorio:',diretorio)

const caminhoArquivo = path.join(diretorio,nomeArquivo);

fs.mkdirSync(diretorio, { recursive: true });

fs.writeFileSync(caminhoArquivo, texto, 'utf8');

console.log(`✅ Arquivo criado com sucesso em: ${caminhoArquivo}`);
