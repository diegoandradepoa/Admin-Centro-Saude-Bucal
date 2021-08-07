//Criar o arquivo package

npm init -y

//Gerencia as requisições, rotas e URLs, entre outras

npm install express

//Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte

npm install -D nodemon

//Produz código JS válido - para import do ES6

npm install -D sucrase

Use o modelo abaixo no package.json para ajustar o Nodemon + sucrase

"scripts": {
"dev": "nodemon src/server.js",
"build": "sucrase ./src -d ./outDir --transforms imports"
}

Depois crie o arquivo na raiz nodemon.json com o seguinte conteúdo:
{
"watch": ["src"],
"ext": "js",
"execMap": {
"js": "sucrase-node src/server.js"
}
}

--------------Banco--de-dados--------

//Instalar o MongoDB

npm install --save mongodb

//Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.

npm install --save mongoose

//validar campo
npm install --save yup

// Instalar modulo para criptografar a senha
npm install --save bcryptjs

// Instalar a dependencia para JWT
npm install --save jsonwebtoken

// Instalar o módulo para paginação com mongoose
npm install --save mongoose-paginate-v2

// Instalar o Multer: É um middleware node.js para manipulação multipart/form-data, usado para o upload de arquivos.

npm install --save multer

// instalar o CORS para permissão de acesso a URLS

npm install --save cors

// Gerar o backup do banco de dados MongoDB

mongodump --db nomedabase --out c:\data\db

// Restaurar o backup do banco de dados MongoDB

mongorestoree --db nomedabase c:\data\db\nomedabase

//////////////////////////////////

Rodar o projeto: npm run dev
