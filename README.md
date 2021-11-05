# Task List
Projeto de desafio técnico para empresa Ebytr

Obejtivo de desenvolver Uma lista de tarefas utilizando react como ferramenta  front-end e Explress junto do mongoDB no back-end;

---

# Sumário

- [Como Executar](#Como-Executar)
- [Lista de Requisitos](#lista-de-requisitos)
  - [1 - Visualizar a lista de tarefas](#1---Visualizar-a-lista-de-tarefas)
  - [2 - Inserir uma nova tarefa na lista](#2---Inserir-uma-nova-tarefa-na-lista)
  - [3 - Remover uma tarefa da lista](#3---Remover-uma-tarefa-da-lista)
  - [4 - Atualizar uma tarefa da lista](#4---Atualizar-uma-tarefa-da-lista)
  - [5 - tarefa deve possuir um status editável](#5---Tarefa-deve-possuir-um-status-editável)
- [Desenvolvimento](#Desenvolvimento)
- [Próximos passos](#Próximos-passos)
- [O que eu faria diferente](#O-que-eu-faria-diferente)

# Como Executar

  O projeto está dividido em duas pastas, uma de front-end e outra de back-end;
  Este repositório pode ser clonado em seu computador e executado localmente, para isso siga os seguintes passos:

    1- Crie um diretório em seu computador;
    2- Enre no diretorio criado pelo terminal;
    3- Clone o repositório com o seguinte comando:
        git clone git@github.com:bruno-s-mendes/taskList.git
    4- Entre no diretório do desafio pelo terminal, para isso rode o comando:
        cd taskList;
    ** Como o projeto está estruturado em duas pastas, teremos de separar a exeução, priemiro faça do back-end e depois do front-end**
    BACK-END
    5-  Entre no diretório do back-end pelo terminal, para isso rode o comando:
        cd back-end
    6- Instale as dependencias do back-end, para isso rode o comando:
        npm instal;
    7- inicie o mongo Db no diretório, para isso rode o comando:
        sudo service mongod start; // isso no linux
        ** caso não tenha o mongoDB instalado, é necessário realizar a instalação em seu computador;
    8- inicie a aplicação back-end, para isso rode o comando:
        npm run dev;
    9- Mantenha o terminal abberto, com a aplicação rodando;
    FRONT-END
    10- Abra um novo terminal pela pasta do desafio (taskList);
    11- Entre no diretório do front-end pelo terminal, para isso rode o comando:
        cd front-end
    12- Instale as dependencias do front-end, para isso rode o comando:
        npm instal;
    13- inicie a aplicação front-end, para isso rode o comando:
        npm start;

    A aplicação deve abrir em seu navegador. Caso tenha alguma dúvida não hesite em me contatar no email: mendessbruno@gmail.com


# Lista de Requisitos:

### 1 - Visualizar a lista de tarefas

Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;

### 2 - Inserir uma nova tarefa na lista;

Deve ser possível adicionar uma nova tarefa à lista;

### 3 - Remover uma tarefa da lista;

Deve ser possível remover uma tarefa da lista;

### 4 - Atualizar uma tarefa da lista;

Deve ser possível atualizar uma tarefa da lista;

### 5 - Tarefa deve possuir um status editável;

Deve ser possível alterar o status de uma tarefa da lista entre pendente, em andamento ou pronto;


# Desenvolvimento 
  Para desenvolver este desafio, eu criei no escalidraw uma estrutura de como cada interface deveria funcionar, de acordo com os requisitos propostos. O resultado foi o seguinte: 
  
  Back-End:
![back](https://user-images.githubusercontent.com/78617162/140455584-6bd84a60-4a7d-4756-b936-1e6d56cbac06.png)

  Front-End:
![front](https://user-images.githubusercontent.com/78617162/140455623-c8631d8d-6e76-443c-8183-0564991560ad.png)

  Tendo essas estruturas, eu tive um guia para montar a plicação. Comecei pelo Back-End, criando uma aplicação REST com arquitetura MSC, utilizei o banco de dados Mongo DB com uma collection para guardar as tarefas.
  No front-end montei uma aplicação React simples, comm uma página e 3 componentes. Como é uma aplicação de uma página, optei por não utilizar Redux para o gerenciamento de estado, mas durante o desenvolvimento eu percebi que teria facilitado bastante e o código teria ficado mais enxuto.
  
# Próximos passos
  A aplicação ficou sem testes, portanto a proxima etapa é a implementação dos testes unitários.
  Como incremento da aplicação, será implementado um controle de usuário, para mais de uma pessoa poder acessar a aplicação;
  Após o controle de usuário será feito o deploy da aplicação para os usuários poderem acessar remotamente;
  
# O que eu faria diferente
  Eu desenvolveria a aplicação com arquitetura MVC, pois como é uma aplicação de apenas uma tela para interação com o usuário e não existe perspectiva e muita evolução, não ha necessidade de se montar uma aplicação com o front-end e o back-end separados.
  Durante o desenvolvimento, após terminar o desenvolvimento do back-end fui iniciar a escrita dos testes. Decidi iniciar pelo model, mas tive dificuldade em utilizar o mongo-memory-server, dediquei muito tempo à essa tarefa e não consegui conclui-la. Eu poderia ter escrito os outros testes quando tive dificuldade e deixado o model para o final, teria sido mais proveitoso, pois devido ao tempo perdido não consegui escrever os outros testes para poder terminar de escrever a aplicação.

