Hii This is My SDM Project


Git Commands for Proxy Error :
1. git config --global --unset http.proxy
2. git config --global --unset https.proxy
3. git config --global --unset core.gitproxy
4. git config --global http.proxy http://exam@192.168.10.4:808
5. git config --global credential.helper wincred
6. git config --global user.name "Abhishek Shahane"
7. git config --global user.email "abhishekshahane29@gmail.com"
8. git config --global user.password "token from github"


Git commands for Push and Pull :
1. git clone "git repo url"
2. git add .
3. git commit -m "message"
4. git push


Docker File Text :
FROM node:18
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./app
CMD node server.js


Docker Commands on EC2 Instance :
1. sudo apt update
2. mkdir foldername
3. cd folder
4. git clone "git repo url"
5. 
