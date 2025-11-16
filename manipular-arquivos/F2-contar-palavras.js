const fs=require("fs")
const path=require("path")

const diretorioOrigemArquivo="arquivos_gerados"
const nomeArquivoAnalisado="mensagem.txt"

const arquivo=path.join(__dirname,diretorioOrigemArquivo,nomeArquivoAnalisado)

contarPalavrasRepetidas(arquivo)

function contarPalavrasRepetidas(caminho) {
    try {
        const conteudo=fs.readFileSync(caminho,"UTF8")

        const palavras=conteudo
            .toLowerCase()
            .replace(/[.,!?;:()"]/g, "")
            .split(/\s+/);

        const contagem = {}

        palavras.forEach(p => {
            if (p.trim() !== ""){
                contagem[p] = (contagem[p] || 0)+1;
            }
        });

        const repetidas=Object.entries(contagem)
            .filter(([_, qtd]) => qtd > 1)
            .sort((a,b) => b[1] - a[1]);

        console.log("Palavras repetidas:")

        repetidas.forEach(([palavra, qtd]) => {
            console.log(`${qtd} vezes -${palavra}: `)
        });

    } catch (err) {
        console.error("Erro ao acessar o arquivo:", err)
    }
}