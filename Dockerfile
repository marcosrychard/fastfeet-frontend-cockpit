### Multi Stage Build ###

### Obter o source e gerar o build ###
FROM node:latest AS ng-builder
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

RUN $(npm bin)/ng build --prod

# run tests
# RUN ng test --watch=false
# RUN ng e2e --port 4202

### Subir o source para o servidor NGINX com a app Angular ###
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=ng-builder /app/dist/fastfeet-frontend-cockpit /usr/share/nginx/html
RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

EXPOSE 80
