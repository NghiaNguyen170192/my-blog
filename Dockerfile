FROM node as builder

WORKDIR /app
COPY . .
RUN npm ci

EXPOSE 3000

CMD ["npm","run","dev","--","--host"]