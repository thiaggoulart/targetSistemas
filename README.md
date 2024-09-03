# Como Rodar Arquivo TS no Terminal

Aqui você achará instruções de como rodar um arquivo TypeScript (`.ts`) no terminal. 

## Pré-requisitos

1. **Node.js e npm (Node Package Manager)**:
   - Você deve ter o Node.js instalado no seu sistema.
   - Você pode baixar e instalar o Node.js a partir de [nodejs.org](https://nodejs.org/), caso não tenha instalado ainda.

2. **TypeScript**:
   - Instale o compilador TypeScript globalmente usando npm.
   npm install -g typescript

# Rodando o arquivo:

Primeiro é necessário instalar as depências rodando um npm i.

## Compilando de .ts para .js
Compile o arquivo .ts para JavaScript usando o comando tsc (TypeScript Compiler).
Exemplo:

tsc app.ts

O que irá gerar um aquivo app.js

## Compilando arquivo.js
Compile o arquivo .js usando o comando node.
Exemplo: 

node app.js