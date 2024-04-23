# Git

O Git é um sistema de controle de versão distribuído usado principalmente no desenvolvimento de software para rastrear e gerenciar mudanças no código-fonte ao longo do tempo. Ele permite que os desenvolvedores trabalhem em colaboração, registrem e revisem as alterações feitas no código e revertam para versões anteriores conforme necessário. O Git oferece uma maneira eficiente e flexível de gerenciar o desenvolvimento de software, fornecendo recursos como branches, commits, mesclagens e muito mais.

Git é a ferramenta usada no GitHub porque oferece um sistema robusto e eficiente para controle de versão, enquanto o GitHub complementa o Git com uma interface amigável e uma variedade de ferramentas adicionais para facilitar a colaboração e o gerenciamento de projetos de software.

## Principais Conceitos do Git

- **Repositório (Repository):** Local onde o projeto é armazenado, contendo todos os arquivos e histórico de alterações.
- **Commit:** Instantâneo do projeto em um determinado momento, registra as alterações com uma mensagem descritiva.
- **Branch:** Linha de desenvolvimento independente, permitindo trabalhar em novos recursos ou correções sem afetar a branch principal.
- **Merge (Mesclar):** Combinação das alterações de uma branch para outra, comumente usada para incorporar o trabalho de uma branch de recurso para a principal.
- **Clone:** Criação de uma cópia local do repositório remoto em sua máquina.
- **Push (Empurrar):** Envio dos commits locais para um repositório remoto.
- **Pull (Puxar):** Obtenção das alterações do repositório remoto e mesclagem com o repositório local.
- **Fork:** Cópia de um repositório em sua própria conta, permitindo trabalhar em projetos de terceiros sem modificar o original.

## Funcionamento

### Fluxo de Trabalho:

1. **Criação do Repositório:**
   - Um repositório Git é criado usando o comando `git init` em um diretório existente do projeto ou criando um novo repositório em uma plataforma de hospedagem como o GitHub.

2. **Desenvolvimento Ativo:**
   - Durante o desenvolvimento, os arquivos do projeto são modificados conforme necessário para implementar novos recursos ou corrigir bugs.

3. **Adição de Alterações (Staging):**
   - Antes de fazer um commit, você seleciona as alterações que deseja incluir no próximo snapshot (commit). Isso é feito usando o comando `git add` para mover as alterações da área de trabalho para a área de staging.

4. **Commit:**
   - Um commit é criado usando o comando `git commit`. Cada commit representa um snapshot do estado atual do projeto, incluindo as alterações adicionadas à área de staging, juntamente com uma mensagem descritiva.

5. **Criação de Branches:**
   - Para trabalhar em novos recursos ou correções de bugs sem interferir no código principal, você pode criar uma nova branch usando o comando `git branch nome-da-branch`.

6. **Trabalho na Branch:**
   - Você trabalha na nova branch, fazendo as alterações necessárias nos arquivos do projeto.

7. **Merge (Mesclagem) de Branches:**
   - Quando o trabalho na nova branch está completo e pronto para ser incorporado à branch principal, você pode mesclar as alterações usando o comando `git merge nome-da-branch`.

8. **Push (Envio) para o Repositório Remoto:**
   - Para compartilhar suas alterações com outros colaboradores ou fazer backup do seu trabalho, você envia seus commits para um repositório remoto usando o comando `git push`.

9. **Pull (Recebimento) de Alterações do Repositório Remoto:**
   - Para obter as alterações feitas por outros colaboradores no repositório remoto e incorporá-las ao seu repositório local, você usa o comando `git pull`.

## Recursos Avançados:

- **Git Rebase:**
  O Git Rebase é uma operação que permite reorganizar o histórico de commits em uma branch. Em vez de mesclar os commits de uma branch com outra (como na operação git merge), o rebase move os commits de uma branch para o início de outra. Isso pode ser útil para manter um histórico de commits limpo e linear, especialmente ao trabalhar em colaboração com outras pessoas em um projeto.

- **Git Cherry-pick:**
  O Git Cherry-pick é uma operação que permite aplicar um commit específico de uma branch para outra, sem precisar mesclar toda a branch. Isso é útil quando você deseja trazer uma alteração específica de uma branch para outra, sem trazer todas as outras alterações que estão na mesma branch.

- **Git Bisect:**
  O Git Bisect é uma ferramenta usada para encontrar o commit específico que introduziu um determinado problema (como um bug) em um projeto. Ele automatiza o processo de teste de commits anteriores para determinar qual commit introduziu o problema, usando uma busca binária para encontrar o commit problemático de forma eficiente.

- **Git Submodules:**
  Os Git Submodules são repositórios Git aninhados dentro de outro repositório Git. Eles permitem incluir e controlar versões específicas de outros repositórios como subdiretórios em seu próprio projeto. Isso é útil quando você deseja incluir dependências externas em seu projeto, mantendo-as separadas e gerenciadas de forma independente.

- **Git Hooks:**
  Os Git Hooks são scripts personalizados que são acionados automaticamente em determinados eventos do Git, como antes ou depois de um commit, push, merge, etc. Eles permitem automatizar tarefas personalizadas ou aplicar políticas específicas de projeto, como execução de testes automatizados, validação de código, notificações, entre outros. Os hooks podem ser configurados no nível do repositório Git para aplicar consistentemente em todos os colaboradores do projeto.

