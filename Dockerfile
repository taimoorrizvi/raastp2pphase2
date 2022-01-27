FROM docker.io/node:14.18-alpine as mpgraastp2pui_stage1
WORKDIR /app

LABEL maintainer="Taimoor Rizvi"

RUN mkdir -p /app/node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./

RUN npm cache clean --force

RUN rm ./package-lock.json

RUN npm install

RUN chmod a+x /app/node_modules


RUN npm install react-scripts --save
RUN chmod +x node_modules/.bin/react-scripts

COPY . .

RUN npm run build

#FROM nginx:alpine as mpgraastp2pui_final
#COPY --from=mpgraastp2pui_stage1 /app/build /usr/share/nginx/html
#RUN chmod -R 777 /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf


#FROM twalter/openshift-nginx
#COPY --from=mpgraastp2pui_stage1 /app/build /var/cache/nginx
#COPY --from=mpgraastp2pui_stage1 /app/build /var/run

#FROM nginx:1.17
#COPY nginx.conf /etc/nginx/nginx.conf
#WORKDIR /code
#COPY --from=mpgraastp2pui_stage1 /app/build .
#EXPOSE 80:80
#CMD ["nginx", "-g", "daemon off;"]


FROM bitnami/nginx:latest
COPY --from=mpgraastp2pui_stage1 /app/build /app
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
