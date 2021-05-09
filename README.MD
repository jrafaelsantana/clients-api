# Clients API

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Clients%20API&uri=https%3A%2F%2Fjsonkeeper.com%2Fb%2FJWHK)

Repósitório referente a criação de uma API que execute as seguintes operações:

- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

## Feito com

- [Node](https://nodejs.org/en/) (13.7)
- [MariaDB](https://www.mariadb.org/) (10.6)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## Instalação

Após clonar o projeto, siga uma das formas de configuração a seguir:

### Docker (recomendado)

```
# buildar o container
$ docker-compose build

# rodar containers (use a flag -d para rodar em background)
$ docker-compose up

# executar migrações
$ docker-compose exec web npm run init-db
```

Após tudo isso, a aplicação deverá estar rodando normalmente na [porta 3333](http://localhost:3333)

### Local

```
# Use o env de exemplo
$ cp .env.example .env

# configure os dados do seu banco no .env

# executar migrações
$ npm run init-db

# executar seeds
$ npm run start
```

## Endpoints

O arquivo `EndpointsInsomnia.json` contêm os endpoints já prontos para teste na ferramenta Insomnia. Caso prefira, clique no badge **Run in Insomnia** localizado no topo deste documento.
