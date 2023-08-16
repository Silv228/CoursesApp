FROM node
WORKDIR /courses-app
COPY package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV production
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000