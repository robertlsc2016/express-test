# Etapa 1: Definir a imagem base
FROM node:18-alpine

# Etapa 2: Definir o diretório de trabalho
WORKDIR /app

# Etapa 3: Copiar os arquivos de dependências
COPY package*.json ./

# Etapa 4: Instalar as dependências
RUN npm install

# Etapa 5: Copiar o restante do código da aplicação
COPY . .

# Etapa 6: Expor a porta que o servidor vai rodar
EXPOSE 3000

# Etapa 7: Definir o comando para iniciar a aplicação
CMD ["npm", "start"]
