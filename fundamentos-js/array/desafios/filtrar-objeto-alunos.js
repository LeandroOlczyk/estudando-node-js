/*
Desafio: Receba um array contendo o objeto Alunos, gere um novo array informando os alunos aprovados e os reprovados.
*/

function Filtrar_Alunos_Aprovados(aluno) {
    return aluno.nota >= 7;
};

function Filtrar_Alunos_Reprovados(aluno) {
    return aluno.nota < 7;
};

let turma = [
    {nome: 'Pedro', nota: 6.5},
    {nome: 'Junior', nota: 9.5},
    {nome: 'Rafael', nota: 9.0},
    {nome: 'Clóvis', nota: 5.5},
    {nome: 'Bruno', nota: 7.5},
    {nome: 'Fernando', nota: 8.0},
    {nome: 'Aline', nota: 7.0}
];

let listaAlunosAprovados = turma.filter(Filtrar_Alunos_Aprovados);
let listaAlunosReprovados = turma.filter(Filtrar_Alunos_Reprovados);

console.log('---- Alunos Aprovados ----')
listaAlunosAprovados.forEach( alunos => {
    console.log(`Nome: ${alunos.nome} | Nota: ${alunos.nota}`);
});

console.log('\n---- Alunos Reprovados ----')
listaAlunosReprovados.forEach( alunos => {
    console.log(`Nome: ${alunos.nome} | Nota: ${alunos.nota}`);
});