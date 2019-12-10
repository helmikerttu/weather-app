FROM node:12.13
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 80
CMD ["npm", "start"]