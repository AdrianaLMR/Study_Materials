// Para executar o teste:
// 1. Navegue até o diretório onde está localizado o arquivo nome-arquivo.js no terminal.
// 2. Execute o comando `node nome-arquivo.js` substituindo "nome-arquivo.js" pelo nome do seu arquivo JavaScript.
//    Por exemplo: node test.js
// 3. Siga as instruções exibidas no terminal para responder às perguntas e executar o teste.


// Importa o módulo readline para interagir com o usuário no terminal
const readline = require('readline');

// Cria uma interface readline para leitura de entradas do usuário
const rl = readline.createInterface({
  input: process.stdin,   // Define a entrada como o terminal
  output: process.stdout  // Define a saída como o terminal
});

// Pergunta ao usuário seu nome e aguarda a resposta
rl.question('Digite seu nome: ', (nome) => {
  // Quando o usuário fornecer uma resposta, a função de callback é chamada com o nome fornecido como argumento

  // Pergunta ao usuário sua idade e aguarda a resposta
  rl.question('Digite sua idade: ', (idade) => {
    // Quando o usuário fornecer uma resposta, a função de callback é chamada com a idade fornecida como argumento

    // Pergunta ao usuário sua profissão e aguarda a resposta
    rl.question('Digite sua profissão: ', (profissao) => {
      // Quando o usuário fornecer uma resposta, a função de callback é chamada com a profissão fornecida como argumento

      // Imprime as informações fornecidas pelo usuário no terminal
      console.log(`Nome: ${nome}, Idade: ${idade}, Profissão: ${profissao}`);

      // Mensagem de boas-vindas após o usuário responder todas as perguntas
      console.log('Bem-vindo(a) ao nosso sistema!');

      // Fecha a interface readline, permitindo que o programa seja encerrado
      rl.close();
    });
  });
}); 
