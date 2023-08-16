FROM node
WORKDIR /courses-app
COPY package.json package.json
RUN npm install
ADD . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000