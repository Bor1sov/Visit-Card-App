FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN DATABASE_URL="postgresql://user:password@localhost:5432/database" npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:docker"]