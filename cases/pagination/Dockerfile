FROM node:20-alpine
ENV PORT 3000
WORKDIR /usr/src/app
COPY ./app/package*.json ./
RUN npm install -g npm && npm install
COPY ./app/ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]
