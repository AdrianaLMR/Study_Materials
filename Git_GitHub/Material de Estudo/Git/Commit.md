# Commit

O commit é uma operação fundamental que registra alterações nos arquivos do projeto em um repositório. Ele permite que os desenvolvedores controlem e gerenciem o histórico de versões do projeto, facilitando o desenvolvimento colaborativo e controlado por versão. É como tirar uma fotografia do estado atual do seu projeto em um determinado momento.

## Finalidade do Commit

O commit é usado para registrar um conjunto específico de alterações feitas nos arquivos do projeto. Cada commit representa uma unidade lógica de mudança e deve ser acompanhado por uma mensagem descritiva que explique as alterações realizadas.

## Processo de Commit

Antes de fazer um commit, as alterações nos arquivos devem ser preparadas para serem incluídas no próximo commit. Isso é feito movendo os arquivos modificados para a área de staging (ou índice) usando o comando `git add`. Em seguida, o comando `git commit` é usado para confirmar as alterações na área de staging e criar um novo commit.

## Estrutura de um Commit

Cada commit possui uma estrutura que inclui:
- Identificador único (hash): Um hash SHA-1 que identifica exclusivamente o commit dentro do repositório.
- Autor e data: O nome do autor do commit e a data e hora em que o commit foi feito.
- Mensagem: Uma mensagem descritiva que explica as alterações feitas no commit. É importante fornecer mensagens claras e concisas para ajudar outros colaboradores a entenderem o propósito das alterações.

## Histórico de Commits

Os commits são organizados em um histórico linear no Git, mostrando a sequência de alterações ao longo do tempo. Cada commit aponta para o commit pai anterior, formando uma linha de tempo que mostra como o projeto evoluiu ao longo do tempo.

## Revisão e Gerenciamento

O histórico de commits permite que os desenvolvedores revisem e gerenciem as alterações feitas no projeto. Eles podem navegar pelo histórico, visualizar detalhes de cada commit e reverter para versões anteriores do projeto conforme necessário.

## Push e Pull

Depois que os commits são feitos localmente, eles podem ser enviados (pushed) para um repositório remoto usando o comando `git push`. Da mesma forma, os commits feitos em um repositório remoto podem ser baixados (pulled) para o repositório local usando o comando `git pull`.
