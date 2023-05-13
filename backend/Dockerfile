# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]





##Build stage
#FROM node:18-alpine as build
#
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#RUN npm run build \
#    && npm prune --production
#
#
##Prod stage
#FROM node:18-alpine
#
#ARG NODE_ENV=production
#ENV NODE_ENV=${NODE_ENV}
#
#WORKDIR /usr/src/app
#
#COPY --from=build /usr/src/app/dist ./dist/
#COPY package*.json ./
#
#RUN npm install --only=production
#
#RUN rm package*.json
#
#EXPOSE 3000
#
#CMD ["node", "dist/main.js"]

