
//Criando uma class para produtos
class Produto {
    constructor (nome, valor, tipo, quantidade){
        this.nome = nome,
        this.valor = valor.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'}),
        this.tipo = tipo,
        this.quantidade = quantidade
    }

    verificacao(produtoIndividual){
        for (const i in produtoIndividual){
            console.log(`${i} -> ${produtoIndividual[i]}`);
        }
    }
}

//Adicionando uma lista para diversos produtos 
const listaProdutos = [];

//Funcao para cadastrar os itens do produto
function cadastrar (){
    let nomeProduto = prompt('Digite o nome do produto: ');
    let valorProduto = parseFloat(prompt('Digite o valor do produto: '));
    let tipoProduto = prompt('Digite o tipo do produto: ');
    let quantidadeProduto = parseInt(prompt('Digite a quantidade do produto: '));
    listaProdutos.push(new Produto(nomeProduto, valorProduto, tipoProduto, quantidadeProduto));
}

//funcao caso o valor digitado nao seja 1 ou 2
const valorInvalido = () => {
    do {
        opcao = prompt('Digite a opcao desejada: (1) cadastrar produto  (2) Sair do programa');
    }while(opcao != 1 && opcao != 2)
}

let opcao = prompt('Digite a opcao desejada: (1) cadastrar produto  (2) Sair do programa');

if (opcao != 1 && opcao != 2){
    valorInvalido();
}



while(opcao == 1){
    cadastrar();
    alert('Produto cadastrado!')
    valorInvalido();
}

alert('Voce saiu do programa');

let exibicao = prompt('Voce deseja analisar a lista de produtos? (sim / nao)');

if (exibicao == 'sim'){
    for (const i of listaProdutos){
        i.verificacao(i);
    }
    exibicao = 'nao';
}else {
    alert('Programa encerrado')
}
