let maria = 2;
let joao = 1;

function deJoaoParaMaria() {
    maria = maria + joao;
    joao = 0;
}

function deMariaParaJoao() {
    joao = joao + maria;
    maria = 0;
}

function getJoao() {
    return joao;
}

function getMaria() {
    return maria;
}

export {deJoaoParaMaria, deMariaParaJoao, getJoao, getMaria};