# NPM

## O que é o npm?

O npm é o gerenciador de pacotes padrão para o ecossistema do Node.js. Ele permite que os desenvolvedores instalem, compartilhem e gerenciem pacotes de código JavaScript reutilizáveis em seus projetos.

### Instalação do npm:

O npm é instalado automaticamente junto com o Node.js. Quando você instala o Node.js em seu sistema, o npm também é instalado como parte do processo.

### Comandos Básicos:

- Para instalar um pacote, você usa o comando `npm install nome_do_pacote`. Para remover um pacote, usa-se `npm uninstall nome_do_pacote`.
- `npm init` é usado para iniciar um novo projeto Node.js e criar um arquivo `package.json` para gerenciar as dependências e configurações do projeto.
- `npm update` atualiza os pacotes instalados para as versões mais recentes.
- `npm search` é usado para pesquisar pacotes no registro público do npm.
- `npm publish` é usado para publicar um pacote no registro público do npm.

### Arquivo package.json:

O `package.json` é um arquivo de manifesto para projetos Node.js. Ele contém metadados do projeto, como nome, versão, descrição e dependências do projeto. Também inclui scripts personalizados e configurações específicas do projeto.

### Gestão de Dependências:

O npm rastreia automaticamente as dependências dos pacotes instalados e garante que todas as dependências necessárias estejam disponíveis para o projeto. As dependências são listadas no arquivo `package.json` e podem ser instaladas usando o comando `npm install`.

### Versionamento de Pacotes:

O npm permite especificar as versões exatas ou faixas de versão dos pacotes que você deseja instalar. Isso é feito adicionando entradas ao arquivo `package.json`. Isso ajuda a garantir a consistência e evita atualizações inesperadas que podem quebrar o projeto.

### Publicação de Pacotes:

Os desenvolvedores podem compartilhar suas próprias bibliotecas JavaScript com a comunidade publicando-as no registro público do npm. Para fazer isso, eles usam o comando `npm publish`.

### Escopos de Pacotes:

O npm suporta escopos de pacotes, que permitem agrupar pacotes relacionados sob um escopo comum. Os pacotes com escopo são instalados usando o formato `@scope/nome_do_pacote`.

### Ferramentas de Gestão de Projeto:

Além de instalar pacotes, o npm fornece ferramentas para inicializar, configurar e gerenciar projetos Node.js. Isso inclui comandos como `npm init` para iniciar um novo projeto, `npm run` para executar scripts definidos no arquivo `package.json`, entre outros.
