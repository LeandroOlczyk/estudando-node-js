import PromptSync from "prompt-sync";

const prompt = PromptSync();

function ObterNumeroMisterioso() {
    // Math.random() retorna um valor entre 0 e 1 ex: 0.8614532159
    // Math.round() realiza o arredondamento de um número.
    return Math.round((Math.random() * 100), 2);
}

function ValidarFimDeJogo(numeroMisterioso,numeroDaSorte,tentativas) {
    
    tentativas -=1 ;
    
    if (tentativas<=0) {
        console.log(`Suas tentativas esgotaram... \nO número era: ${numeroMisterioso}`)
        return {
            continuar: false,
            tentativas: tentativas
        };
    }
    
    if (numeroMisterioso===numeroDaSorte) {
        console.log("Parabéns, você venceu!")
        return {
            continuar: false
        }
    }

    if (numeroMisterioso<numeroDaSorte) {
        let aproximacao=(numeroDaSorte-numeroMisterioso)

        if (aproximacao>=20) {
            console.log(`Seu chute foi muito alto! \nRestam ${tentativas} tentativas.`)
        } else if (aproximacao>=10 && aproximacao<20) {
            console.log(`Seu chute foi alto mas está perto! \nRestam ${tentativas} tentativas.`)
        } else if (aproximacao<10 && aproximacao>=5) {
            console.log(`Seu chute foi alto mas está muito perto! \nRestam ${tentativas} tentativas.`)
        } else {
            console.log(`Seu chute quase foi certeiro! \nRestam ${tentativas} tentativas.`)
        }
        return {
            continuar: true,
            tentativas: tentativas
        };
    }

    if (numeroMisterioso>numeroDaSorte) {
        let aproximacao=(numeroMisterioso-numeroDaSorte)

        if (aproximacao>=20) {
            console.log(`Seu chute foi muito baixo! \nRestam ${tentativas} tentativas.`)
        } else if (aproximacao>=10 && aproximacao<20) {
            console.log(`Seu chute foi baixo mas está perto! \nRestam ${tentativas} tentativas.`)
        } else if (aproximacao<10 && aproximacao>=5) {
            console.log(`Seu chute foi baixo mas está muito perto! \nRestam ${tentativas} tentativas.`)
        } else {
            console.log(`Seu chute quase foi certeiro! \nRestam ${tentativas} tentativas.`)
        }
        return {
            continuar: true,
            tentativas: tentativas
        };
    }

}

function NovoJogo() {

    let numeroDaSorte
    let numeroMisterioso
    let resultado
    let continuar
    let tentativas=5

    console.log("\n");
    console.log("----- Jogo da Adivinhacao ----- \n");

    console.log("Regras:");
    console.log("1. Teste sua sorte informando um número entre 0 e 100!");
    console.log(`2. Você possui ${tentativas} tentativas. \n`);

    numeroMisterioso = ObterNumeroMisterioso();
    console.log(numeroMisterioso);

    do {
        console.log("")
        numeroDaSorte = prompt("Digite um Número: ");
        numeroDaSorte = parseInt(numeroDaSorte);
        let entrada = prompt("Digite um Número: ");

        resultado = ValidarFimDeJogo(numeroMisterioso, numeroDaSorte, tentativas);

        continuar = resultado.continuar;
        tentativas = resultado.tentativas;

    } while (continuar!==false)

    console.log("\n----- Fim de Jogo -----");
    console.log("");
    
}

NovoJogo();
