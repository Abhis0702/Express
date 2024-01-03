write FROM node:20
	    WORKDIR /app
	    COPY package.json /app
	    RUN npm install
	    COPY . /app
	    CMD node server.js
