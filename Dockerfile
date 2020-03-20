#Specify a base image
FROM node:13.8-alpine


ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin
WORKDIR /home/node

ENV NODEPORT=8081
ENV NODE_ENV=development

USER node

EXPOSE 49160:8080

#Copy the dependencies file
COPY package*.json ./

#Install dependencies
RUN npm install 

#Copy remaining files
COPY . ./

#Default command
CMD ["npm","server"]
