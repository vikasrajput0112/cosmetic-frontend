FROM node:18 AS build

WORKDIR /app

RUN apt-get update && apt-get install -y ca-certificates

COPY package*.json ./

RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmmirror.com

RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
