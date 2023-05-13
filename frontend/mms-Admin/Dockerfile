FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json .

CMD ["rm", "yarn.lock"]

CMD ["rm", "package-lock.json"]

# ENV CXXFLAGS="--std=c++14"

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
