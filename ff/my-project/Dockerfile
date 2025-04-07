# frontend/my-project/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]

