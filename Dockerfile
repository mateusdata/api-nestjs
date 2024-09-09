# Use a imagem oficial do Node.js como base para o build
FROM node:18 AS build

# Cria e define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Compila o código TypeScript para JavaScript
RUN npm run build

# Define a imagem base para a execução
FROM node:20.0

# Cria e define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --only=production

# Copia o diretório de build do estágio anterior para o diretório de trabalho
COPY --from=build /app/dist ./dist

# Define a variável de ambiente
ENV NODE_ENV=production
RUN npx prisma generate
# Expõe a porta em que a aplicação irá rodar
EXPOSE 3000

# Define o comando padrão para iniciar a aplicação
CMD ["node", "dist/main"]
