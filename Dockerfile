# Usa a imagem base do Node.js
FROM node:20

# Cria o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json package-lock.json ./

# Instala as dependências (incluindo dependências de desenvolvimento)
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Compila o código TypeScript
RUN npm run build

# Define a variável de ambiente
ENV NODE_ENV=production

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
