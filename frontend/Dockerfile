FROM node:12.13
RUN mkdir /app
WORKDIR /app
COPY . /app
ENV ENDPOINT http://127.0.0.1:9000/api
RUN npm install
EXPOSE 80
CMD ["npm", "start"]