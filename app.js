//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criando a lista de amigos
let amigos = [];
// Carregando elementos do HTML para ser manipulados com o JavaScript
let alerta = document.getElementById("alertas");
let resultado = document.getElementById("resultado");
let lista = document.getElementById("listaAmigos");

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo no momento da interação
    let nome = document.getElementById("amigo").value.trim();

    // Verificar se o campo não está vazio
    if (nome) {
        // Verificar se o nome já foi adicionado na lista para não ter nomes iguais duplicados
        if (amigos.includes(nome)) {
            limparCampo();
            alerta.innerHTML = "Este nome já foi adicionado!";
        } else {
            // Adicionar nomes na lista, atualizar e limpar campo
            amigos.push(nome);
            limparCampo();
            atualizarLista();
        }
    } else {
        alerta.innerHTML = "Por favor, insira um nome!";
    }
}

// Função para limpar o campo após um nome ser adicionado
function limparCampo() {
    nome = document.getElementById("amigo");
    nome.value = "";
    resultado.innerHTML = "";
    alerta.innerHTML = "";
}

// Função para atualizar os nomes adicionados na lista e exibi-los na página
function atualizarLista() {
    // Limpar o conteúdo da lista antes de adicionar novos elementos
    lista.innerHTML = "";

    // Percorrer o array "amigos" e adicionar cada nome como um <li>
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        resultado.innerHTML = "";
        alerta.innerHTML = "Todos os nomes já foram sorteados ou nomes não cadastrados.";
        return;
    }

    limparCampo();

    // Gerar um índice aleatório baseado no tamanho do array
    let indice = Math.floor(Math.random() * amigos.length);

    // Obter o nome correspondente ao índice
    let nomeSorteado = amigos[indice];

    // Atualizando mensagem de qual amigo foi sorteado
    let sorteio = document.getElementById("resultado");
    sorteio.innerHTML = "O amigo secreto sorteado é " + nomeSorteado;

    // Remover o nome da lista
    amigos.splice(indice, 1);

    atualizarLista();
}

// Função para resetar campos e começar um novo jogo
function novoJogo() {
    amigos = [];
    limparCampo();
    lista.innerHTML = "";
}