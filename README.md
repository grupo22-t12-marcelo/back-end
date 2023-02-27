# back-end

## Inicializando o projeto

#

<br>
<h1><b>1) .ENV </b></h1>
<br>

### Após clonar o repositorio para a sua maquina, é preciso adicionar um arquivo chamado .env e colocar as seguintes informações nele

```
SECRET_KEY=sua_secret_key

POSTGRES_HOST=localhost
POSTGRES_USER=seu_usuario_postgres
POSTGRES_PASSWORD=sua_senha_postgres
POSTGRES_PORT=sua_porta_postgres
POSTGRES_DB=_seu_banco_de_dados_postgres
```

<br>
<h1><b>1.2) Comandos </b></h1>
<br>

### Após colocar o env teremos que instalar as dependências do package.json através do comando `yarn`

### Após ter todas as dependências instaladas você poderá rodar as migrações afim de persistir as tabelas no banco de dados atráves do seguinte comando `yarn typeorm migration:run -d src/data-source.ts`

### Se até aqui deu tudo certo, rode o comando `yarn dev` para iniciar o servidor e poder consumir a API

---

<br>
<h1><b>2) Rotas da API </b></h1>
<br>

<h2 align ='center'> Criar anúncios </h2>

`POST /products`

#

### Essa rota precisa passar obrigatoriamente um "type_announcement, title, year, kilometers, price, description, type_vehicle e image". Lembrando que os campos type_announcement e type_vehicle são do tipo choiche, então apenas poderá ser cadastrado em duas opções. No type_announcement poderá ser "Venda" ou "Leilão" e o tipo de veiculo poderá ser "Carro" ou "Moto".

```json
{
  "type_announcement": "Venda",
  "title": "Ford Fiesta",
  "year": 2018,
  "kilometers": 80000,
  "price": 40000.5,
  "description": "Ford fiesta, um carro bom",
  "type_vehicle": "Carro",
  "image": "https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/7fadfd50-0293-0d13-8678-671b5288abb1-1png.jpg"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "type_announcement": "Venda",
  "title": "Ford Fiesta",
  "year": 2018,
  "kilometers": 80000,
  "price": 40000.5,
  "description": "Ford fiesta, um carro bom",
  "type_vehicle": "Carro",
  "image": "https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/7fadfd50-0293-0d13-8678-671b5288abb1-1png.jpg",
  "id": "959adbdf-4409-4f81-b9e5-ffc01828c260",
  "is_published": true,
  "createdAt": "2023-02-23T16:06:59.167Z",
  "updatedAt": "2023-02-23T16:06:59.167Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não tenha passado um dos campos obrigatórios

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "title is a required field"
}
```

Caso não tenha colocado um dos choices

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "type_announcement must be one of the following values: Venda, Leilão"
}
```

<h2 align ='center'> Listar anúncios </h2>

`GET /products`

#

### Essa rota ficará responsável por listar todos os anuncios de todos os anunciantes. Não será necessario estar autenticado para visualizar os dados.

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
[
  {
    "type_announcement": "Venda",
    "title": "Ford Fiesta",
    "year": 2018,
    "kilometers": 80000,
    "price": 40000.5,
    "description": "Ford fiesta, um carro bom",
    "type_vehicle": "Carro",
    "image": "https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/7fadfd50-0293-0d13-8678-671b5288abb1-1png.jpg",
    "id": "959adbdf-4409-4f81-b9e5-ffc01828c260",
    "is_published": true,
    "createdAt": "2023-02-23T16:06:59.167Z",
    "updatedAt": "2023-02-23T16:06:59.167Z"
  },
  {
    "type_announcement": "Venda",
    "title": "Ford Fiesta",
    "year": 2018,
    "kilometers": 80000,
    "price": 40000.5,
    "description": "Ford fiesta, um carro bom",
    "type_vehicle": "Carro",
    "image": "https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/7fadfd50-0293-0d13-8678-671b5288abb1-1png.jpg",
    "id": "959adbdf-4409-4f81-b9e5-ffc01828c260",
    "is_published": true,
    "createdAt": "2023-02-23T16:06:59.167Z",
    "updatedAt": "2023-02-23T16:06:59.167Z"
  }
]
```

<h2 align ='center'> Listar anúncios </h2>

`GET /products/:id`

#

### Essa rota ficará responsável por listar um unico anuncio...

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 CREATED`

```json
{
  "type_announcement": "Venda",
  "title": "Ford Fiesta",
  "year": 2018,
  "kilometers": 80000,
  "price": 40000.5,
  "description": "Ford fiesta, um carro bom",
  "type_vehicle": "Carro",
  "image": "https://photo-b2b-autoaction.storage.googleapis.com/autoaction_prod/7fadfd50-0293-0d13-8678-671b5288abb1-1png.jpg",
  "id": "959adbdf-4409-4f81-b9e5-ffc01828c260",
  "is_published": true,
  "createdAt": "2023-02-23T16:06:59.167Z",
  "updatedAt": "2023-02-23T16:06:59.167Z"
}
```

<h2 align ='center'> Editar anúncios </h2>

`PATCH /products/:id`

#

### Poderá ser editado um a um como poderá editar todos ao mesmo tempo, porém os campos ID e is_published não poderão ser editados.

```json
{
  "description": "Esse carro é muito bom, pode comprar a vontade"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 CREATED`

```json
{
  "message": "Product updated!"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso tenha passado um dos campos que não pode ser alterado

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "id cannot be changed"
}
```

<h2 align ='center'> Deletar anúncios </h2>

`DELETE /products/:id`

#
