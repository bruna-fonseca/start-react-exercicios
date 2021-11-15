FROM node
WORKDIR /usr/src/app
ENV NODE_OPTION=--openssl-legacy-provider
COPY package.json ./
RUN rm -f node_modules package-lock.json
RUN npm install
COPY . ./
EXPOSE 3001
CMD ["npm", "start"]