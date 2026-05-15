import PromptSync from "prompt-sync";

const prompt = PromptSync();

function ObterNumeroMisterioso() {
    // Math.random() retorna um valor entre 0 e 1 ex: 0.8614532159
    // Math.round() realiza o arredondamento de um número.
    return Math.round((Math.random() * 100), 2);
}

function ValidarFimDeJogo(numeroMisterioso, numeroDaSorte, tentativas) {

    tentativas -= 1;

    if (numeroMisterioso === numeroDaSorte) {
        console.log("Parabéns, você venceu!")
        return { continuar: false }
    }

    if (tentativas <= 0) {
        console.log(`Suas tentativas esgotaram... \nO número era: ${numeroMisterioso}`)
        return { continuar: false, tentativas: tentativas };
    }


    if (numeroMisterioso < numeroDaSorte) {
        let aproximacao = (numeroDaSorte - numeroMisterioso)

        if (aproximacao >= 20) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi muito alto!`)
        } else if (aproximacao >= 10 && aproximacao < 20) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi alto mas está perto! `)
        } else if (aproximacao < 10 && aproximacao >= 5) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi alto mas está muito perto! `)
        } else {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi alto e quase certeiro! `)
        }
        return { continuar: true, tentativas: tentativas };
    }

    if (numeroMisterioso > numeroDaSorte) {
        let aproximacao = (numeroMisterioso - numeroDaSorte)

        if (aproximacao >= 20) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi muito baixo! `)
        } else if (aproximacao >= 10 && aproximacao < 20) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi baixo mas está perto! `)
        } else if (aproximacao < 10 && aproximacao >= 5) {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi baixo mas está muito perto! `)
        } else {
            console.log(`[Restam ${tentativas} tentativas] - Seu chute foi baixo e quase certeiro! `)
        }
        return { continuar: true, tentativas: tentativas };
    }

}

function ValidarNumeroDigitado(numeroDaSorte) {

    numeroDaSorte = numeroDaSorte.trim();

    if (numeroDaSorte === "") {
        console.log("Informe um número válido (Entre 0 e 100)");
        return false;
    }

    if (!/^\d+$/.test(numeroDaSorte)) {
        console.log("Informe um número válido (Entre 0 e 100)");
        return false;
    }

    let numero = Number(numeroDaSorte);

    if (numero < 0 || numero > 100) {
        console.log("Informe um número válido (Entre 0 e 100)");
        return false;
    }

    return true;
}

function NovoJogo() {

    let numeroDaSorte, numeroMisterioso, resultado, continuar
    let tentativas = 5

    console.log("\n");
    console.log("----- Jogo da Adivinhacao ----- \n");

    console.log("Regras:");
    console.log("1. Teste sua sorte informando um número entre 0 e 100!");
    console.log(`2. Você possui ${tentativas} tentativas. \n`);

    numeroMisterioso = ObterNumeroMisterioso();

    do {
        console.log("")
        numeroDaSorte = prompt("Digite um Número: ");

        if (!ValidarNumeroDigitado(numeroDaSorte)) {
            continue;
        }

        numeroDaSorte = Number(numeroDaSorte);

        resultado = ValidarFimDeJogo(numeroMisterioso, numeroDaSorte, tentativas);

        continuar = resultado.continuar;
        tentativas = resultado.tentativas;

    } while (continuar !== false)

    console.log("\n----- Fim de Jogo -----");
    console.log("");

}

NovoJogo();