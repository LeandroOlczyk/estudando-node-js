import PromptSync from "prompt-sync";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const prompt = PromptSync();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nomeArquivo = "mensagem.txt";
console.log("\n---------- GRAVAÇÃO DE TEXTO ----------")
console.log("\nEscreva seu texto:")
let texto = prompt("-> ");

const diretorio = path.join(__dirname, "arquivos_gerados");
const caminhoArquivo = path.join(diretorio, nomeArquivo);

fs.mkdirSync(diretorio, { recursive: true });

fs.writeFileSync(caminhoArquivo, texto, "utf8");

console.log(`\n✅ Arquivo criado com sucesso em: \n${caminhoArquivo} \n`);