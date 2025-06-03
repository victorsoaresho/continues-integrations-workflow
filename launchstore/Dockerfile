# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código da aplicação
COPY . .

# Expõe a porta que sua aplicação utiliza (ajuste se necessário)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
