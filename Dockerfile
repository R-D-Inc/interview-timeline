FROM node:16.0.0-alpine
ENV PORT 3000
WORKDIR /usr/src/app
COPY ./app/package*.json ./
RUN npm install -g npm && npm install
COPY ./app/ ./
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]
